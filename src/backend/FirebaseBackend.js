import _ from 'lodash';
import admin from 'firebase-admin';
import { readFile } from 'mz/fs';

async function readJson(file) {
  const text = await readFile(file);
  const json = JSON.parse(text);
  return json;
}

function serizlizeId(id) {
  return id.substring(1);
}
function unserializeId(id) {
  return `-${id}`;
}

function toArray(data) {
  return _(data)
    .map((value, key) => ({
      ...value,
      id: serizlizeId(key),
    }))
    .value();
}

export default class Backend {
  /* Utilities */
  ref(path) {
    return this.database.ref(path);
  }

  /* Implementations */
  async initialize(config) {
    this.config = config;

    this.app = admin.initializeApp({
      credential: admin.credential.cert(await readJson(config.serviceAccountKey)),
      databaseURL: config.databaseURL,
    });

    this.database = this.app.database();
  }

  // eslint-disable-next-line class-methods-use-this
  async close() {
    await this.app.delete();
  }

  async listRooms() {
    const s = await this.ref('rooms').once('value');
    return toArray(s.val());
  }

  async removeRoom(roomId) {
    await this.removeChildItems('rooms', roomId);
  }

  async listChildItems(name, roomId) {
    const s = await this.ref(name).child(unserializeId(roomId)).once('value');
    return toArray(s.val());
  }

  async removeChildItems(name, roomId) {
    await this.ref(name).child(unserializeId(roomId)).remove();
  }

  // eslint-disable-next-line class-methods-use-this
  async listFiles() {
    return []; // ToDo
  }

  // eslint-disable-next-line class-methods-use-this
  async removeFiles() {
    // ToDo
  }
}
