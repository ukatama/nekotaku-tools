import Command from './Command';

export default class ListRooms extends Command {
  async execute() {
    const result = await this.models.room.list();
    Command.printResult(result);
  }
}
