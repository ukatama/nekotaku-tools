import { MongoClient, ObjectId } from 'mongodb';
import { unlink } from 'mz/fs';
import path from 'path';
import Backend from './Backend';

export default class MongoDBBackend extends Backend {
  /* Utilities */
  async collection(name) {
    const collection = await this.db.collection(name);
    return collection;
  }

  async find(name, query = {}) {
    const collection = await this.collection(name);
    return collection.find(query);
  }

  async findArray(name, query = {}) {
    const q = await this.find(name, query);
    const result = await q.toArray();
    return result;
  }

  async remove(name, query) {
    const collection = await this.collection(name);
    const result = await collection.remove(query);
    return result;
  }

  /* Implementations */
  async initialize(config) {
    this.config = config;
    this.client = await MongoClient.connect(config.url, {
      useNewUrlParser: true,
      ...config.mongoOptions,
    });
    this.db = this.client.db(config.database);

    this.filePath = config.file.path;
  }

  async close() {
    this.client.close();
  }

  async listRooms() {
    const result = await this.findArray('rooms');
    return result;
  }

  async removeRoom(roomId) {
    const collection = await this.collection('rooms');
    const result = await collection.deleteOne({ _id: ObjectId(roomId) });
    return result;
  }

  async listChildItems(name, roomId) {
    const result = await this.findArray(name, { roomId });
    return result;
  }

  async removeChildItems(name, roomId) {
    const collection = await this.collection(name);
    const result = await collection.deleteMany({ roomId });
    return result;
  }

  async listFiles(roomId) {
    const result = await this.listChildItems('files', roomId);
    return result;
  }

  async removeFiles(roomId) {
    const files = await this.listFiles(roomId);
    await Promise.all(
      files
        // eslint-disable-next-line no-underscore-dangle
        .map(file => path.join(this.config.file.path, file._id.toString()))
        .map(file => unlink(file)),
    );

    const result = await this.removeChildItems('files', roomId);
    return result;
  }
}
