import Model from './Model';

export default class RoomModel extends Model {
  async list() {
    const result = await this.backend.listRooms();
    return result;
  }

  async remove(roomId) {
    const result = await this.backend.removeRoom(roomId);
    return result;
  }
}
