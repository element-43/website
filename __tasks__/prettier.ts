import { help, sh } from 'tasksfile';

export function prettier(): void {
  sh('prettier --config "./.prettierrc" --write "**/*.{js,json,jsx,ts,tsx}"');
}

help(prettier, 'Parses code to conform to the prettier config', {
  examples: 'task prettier',
});
