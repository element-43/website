import { ICLIOptions } from '@pawelgalazka/cli';
import { help, sh } from 'tasksfile';

const BIN_DIR: string = `node_modules/.bin`;

export function test(options: ICLIOptions): void {
  const updateFlag: string = options.u ? '-u' : '';

  sh(`${BIN_DIR}/jest --config="__test__/jest.config.js" ${updateFlag}`, {
    async: false,
    env: {
      JEST_JUNIT_OUTPUT: 'junit/test-results.xml',
      NODE_ENV: 'test',
    },
  });
}

help(test, 'Run unit tests', {
  examples: `
    task test
    task test -u
  `,
  options: {
    u: 'updates snapshots',
  },
  params: [],
});
