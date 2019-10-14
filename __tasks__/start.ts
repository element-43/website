import { ICommandsDictionary } from '@pawelgalazka/cli';
import { sh } from 'tasksfile';

const BIN_DIR: string = `node_modules/.bin`;

export async function api(): Promise<void> {
  await sh('nodemon src/api/index', {
    async: true,
    env: {
      NODE_ENV: 'development',
    },
  });
}

export async function web(): Promise<void> {
  await sh(
    `node -r dotenv/config -r @babel/register ${BIN_DIR}/webpack-dev-server --config "__webpack__/webpack.dev.config.js" --progress`,
    {
      async: true,
      env: {
        NODE_ENV: 'development',
      },
    }
  );
}

export const start: ICommandsDictionary = {
  api,
  default: () => {
    api();
    web();
  },
  web,
};
