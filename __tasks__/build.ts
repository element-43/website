import { ICommandsDictionary } from '@pawelgalazka/cli';
import { sh } from 'tasksfile';

// Tasks.
import { clean } from './clean';

const BIN_DIR: string = `node_modules/.bin`;

export async function server(): Promise<void> {
  await sh(`${BIN_DIR}/tsc --project "__typescript__/tsconfig.server.json"`, {
    async: true,
    env: {
      NODE_ENV: 'production',
    },
  });
}

export async function web(): Promise<void> {
  await sh(
    `node -r @babel/register ${BIN_DIR}/webpack --config "__webpack__/webpack.config.js" --progress`,
    {
      async: true,
      env: {
        NODE_ENV: 'production',
      },
    }
  );
}

export const build: ICommandsDictionary = {
  default: () => {
    clean();
    server();
    web();
  },
  server,
  web,
};
