import yargs from 'yargs';

import ListRooms from './command/ListRooms';
import ListMessages from './command/ListMessages';
import RemoveRoom from './command/RemoveRoom';

function bind(Command) {
  return async (argv) => {
    const command = new Command(argv);
    await command.initialize(argv);
    await command.execute();
    await command.close();
  };
}

// eslint-disable-next-line no-unused-expressions
yargs
  .option('config', {
    alias: 'c',
    default: './config.json',
  })
  .command(
    'listRooms',
    'list rooms',
    () => {},
    bind(ListRooms),
  )
  .command(
    'listMessages [roomId]',
    'list messages in room',
    () => {},
    bind(ListMessages),
  )
  .command(
    'removeRoom [roomId]',
    'remove room',
    () => {},
    bind(RemoveRoom),
  )
  .argv;
