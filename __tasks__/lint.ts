import { ICLIOptions } from '@pawelgalazka/cli';
import { IAsyncShellOptions } from '@pawelgalazka/shell';
import { help, sh } from 'tasksfile';

const BIN_DIR: string = `node_modules/.bin`;

export async function lint(options: ICLIOptions): Promise<void> {
  const fixFlag: string = options.f || options.fix ? '--fix' : '';
  const asyncShellOptions: IAsyncShellOptions = {
    async: true,
  };

  await sh(`${BIN_DIR}/eslint ${fixFlag} --ext .js .`, asyncShellOptions);
  await sh(
    `${BIN_DIR}/tslint ${fixFlag} "./src/**/*.ts?(x)"`,
    asyncShellOptions
  );
}

help(lint, 'Run linting for JS and TS files', {
  examples: `
    task lint
    task lint --fix/-f
  `,
  options: {
    fix: 'attempt to fix errors',
  },
});
