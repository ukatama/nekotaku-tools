import FirebaseBackend from './FirebaseBackend';
import MongoDBBackend from './MongoDBBackend';

const BackendTable = {
  firebase: FirebaseBackend,
  mongodb: MongoDBBackend,
};

export default async function initializeBackend(config) {
  const Strategy = BackendTable[config.backend];
  if (!Strategy) throw new Error('Unknown backend');

  const backend = new Strategy();
  await backend.initialize(config);

  return backend;
}
