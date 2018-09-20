import fs from 'mz/fs';
import initializeBackend from '../backend';
import getModels from '../model';

export default class Command {
  async initialize(argv) {
    this.argv = argv;

    const json = await fs.readFile(argv.config);
    const config = JSON.parse(json);

    this.backend = await initializeBackend(config);

    this.models = getModels(this.backend);
  }

  async close() {
    await this.backend.close();
  }

  // eslint-disable-next-line class-methods-use-this
  async execute() {
    throw new Error('Abstract method called');
  }

  static printResult(result) {
    console.log(JSON.stringify(result, null, '  '));
  }
}
