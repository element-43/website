import { createServer } from 'http';

// Server.
import { Server } from './server';

(() => {
  const server: Server = new Server();

  createServer(server.app).listen(process.env.PORT || 8080);
})();
