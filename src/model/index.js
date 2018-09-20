import CharacterModel from './CharacterModel';
import FileModel from './FileModel';
import MapModel from './MapModel';
import MemberModel from './MemberModel';
import MemoModel from './MemoModel';
import MessageModel from './MessageModel';
import RoomModel from './RoomModel';
import ShapeModel from './ShapeModel';

export default function getModels(backend) {
  return {
    character: new CharacterModel(backend),
    file: new FileModel(backend),
    map: new MapModel(backend),
    member: new MemberModel(backend),
    memo: new MemoModel(backend),
    message: new MessageModel(backend),
    room: new RoomModel(backend),
    shape: new ShapeModel(backend),
  };
}
