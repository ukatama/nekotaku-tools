/* eslint class-methods-use-this: off, no-unused-vars: off, no-empty-function: off */

export default class Backend {
  async initialize(config) {
  }

  async close() {
  }

  async listRooms() {
    throw new Error('Abstract method called');
  }

  async removeRoom(roomId) {
    throw new Error('Abstract method called');
  }

  async listChildItems(name, roomId) {
    throw new Error('Abstract method called');
  }

  async removeChildItems(name, roomId) {
    throw new Error('Abstract method called');
  }

  async listFiles(roomId) {
    throw new Error('Abstract method called');
  }

  async removeFiles(roomId) {
    throw new Error('Abstract method called');
  }
}
