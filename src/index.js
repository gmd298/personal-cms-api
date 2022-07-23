import { connect, start } from './server';

(async () => {
  await connect();
  await start();
})();
