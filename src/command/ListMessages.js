import Command from './Command';

export default class ListMessages extends Command {
  async execute() {
    const result = await this.models.message.list(this.argv.roomId);
    Command.printResult(result);
  }
}
