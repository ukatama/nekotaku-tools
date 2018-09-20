import Model from './Model';

export default class ChildCollectionModel extends Model {
  constructor(backend, name) {
    super(backend);
    this.name = name;
  }

  async list(roomId) {
    const result = await this.backend.listChildItems(this.name, roomId);
    return result;
  }

  async removeAll(roomId) {
    const result = await this.backend.removeChildItems(this.name, roomId);
    return result;
  }
}
