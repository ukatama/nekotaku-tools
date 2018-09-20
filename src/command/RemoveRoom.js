import _ from 'lodash';
import Command from './Command';

export default class RemoveRoom extends Command {
  async execute() {
    const results = await Promise.all(
      _(this.models)
        .toPairs()
        .filter(([key]) => key !== 'room')
        .mapValues(async ([key, model]) => [
          key,
          await model.removeAll(this.argv.roomId),
        ]),
    );

    results.push([
      'room',
      await this.models.room.remove(this.argv.roomId),
    ]);

    Command.printResult(_.fromPairs(results));
  }
}
