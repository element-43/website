import { Express } from 'express';
import { createServer, Server } from 'http';

export function start(app: Express, port?: number): void {
    const server: Server = createServer(app);

    server.listen(port || process.env.PORT, () => {
        console.log('Server started');
        console.dir(server.address());
    });
}
