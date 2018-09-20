import ChildCollectionModel from './ChildCollectionModel';

export default class MemberModel extends ChildCollectionModel {
  constructor(backend) {
    super(backend, 'members');
  }
}
