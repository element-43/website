import { ICLIOptions } from '@pawelgalazka/cli';
import { help, sh } from 'tasksfile';

export function lint(options: ICLIOptions): void {
  const fixFlag: string = options.f || options.fix ? '--fix' : '';

  sh(`eslint ${fixFlag} --ext .js .`);
  sh(`tslint ${fixFlag} --config "./tslint.json" "./src/**/*.ts?(x)"`);
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
