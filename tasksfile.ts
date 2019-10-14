import { cli } from 'tasksfile';

// Tasks.
import { build } from './__tasks__/build';
import { clean } from './__tasks__/clean';
import { lint } from './__tasks__/lint';
import { prettier } from './__tasks__/prettier';
import { start } from './__tasks__/start';
import { test } from './__tasks__/test';

cli({
  build,
  clean,
  lint,
  prettier,
  start,
  test,
});
