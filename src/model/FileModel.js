import Model from './Model';

export default class FileModel extends Model {
  constructor(backend) {
    super(backend, 'files');
  }

  async list(roomId) {
    const result = await this.backend.listFiles(roomId);
    return result;
  }

  async removeAll(roomId) {
    const result = await this.backend.removeFiles(roomId);
    return result;
  }
}
