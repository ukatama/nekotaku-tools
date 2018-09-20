import ChildCollectionModel from './ChildCollectionModel';

export default class CharacterModel extends ChildCollectionModel {
  constructor(backend) {
    super(backend, 'characters');
  }
}
