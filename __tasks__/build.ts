import { ICommandsDictionary } from '@pawelgalazka/cli';
import { sh } from 'tasksfile';

const BIN_DIR: string = `node_modules/.bin`;

export async function api(): Promise<void> {
  await sh(
    `rm -rf ./dist/api ./dist/common && tsc --project "./__typescript__/tsconfig.api.json"`,
    {
      async: true,
      env: {
        NODE_ENV: 'production',
      },
    }
  );
}

export async function web(): Promise<void> {
  await sh(
    `node -r @babel/register ${BIN_DIR}/webpack --config "./__webpack__/webpack.config.js" --progress`,
    {
      async: true,
      env: {
        NODE_ENV: 'production',
      },
    }
  );
}

export const build: ICommandsDictionary = {
  api,
  default: () => {
    api();
    web();
  },
  web,
};
