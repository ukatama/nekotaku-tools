import ChildCollectionModel from './ChildCollectionModel';

export default class ShapeModel extends ChildCollectionModel {
  constructor(backend) {
    super(backend, 'shapes');
  }
}
