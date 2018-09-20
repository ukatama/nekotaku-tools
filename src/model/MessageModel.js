import ChildCollectionModel from './ChildCollectionModel';

export default class MessageModel extends ChildCollectionModel {
  constructor(backend) {
    super(backend, 'messages');
  }
}
