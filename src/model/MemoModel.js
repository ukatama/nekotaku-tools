import ChildCollectionModel from './ChildCollectionModel';

export default class MemoModel extends ChildCollectionModel {
  constructor(backend) {
    super(backend, 'memos');
  }
}
