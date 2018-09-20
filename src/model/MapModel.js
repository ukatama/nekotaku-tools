import ChildCollectionModel from './ChildCollectionModel';

export default class MapModel extends ChildCollectionModel {
  constructor(backend) {
    super(backend, 'maps');
  }
}
