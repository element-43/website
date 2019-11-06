import { help, sh } from 'tasksfile';

const BIN_DIR: string = `node_modules/.bin`;

export function prettier(): void {
  sh(
    `${BIN_DIR}/prettier --config "./.prettierrc" --write "**/*.{js,json,jsx,ts,tsx}"`
  );
}

help(prettier, 'Parses code to conform to the prettier config', {
  examples: 'task prettier',
});
