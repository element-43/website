import { help, sh } from 'tasksfile';

export function clean(): void {
  sh('rm -rf dist');
}

help(clean, 'Removes the build files', {
  examples: 'task clean',
});
