import chalk from 'chalk';
import { config } from 'dotenv';
import { createInterface } from 'readline';

config();

const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt() {
  reader.question(
    chalk.green('Please enter source code:\n=====>\t'),
    (input) => {
      if (input === 'quit') {
        reader.close();
        console.log(chalk.red('Goodbye!'));
      } else if (input == null || input.trim().length === 0) {
        console.log(chalk.red(`\nEmpty expression\n`));
        prompt();
      } else {
        try {
          console.log(chalk.cyan(`\nInput: ${input}`));
        } catch (error) {
          console.log(chalk.red(`\nExecution failed: ${error}\n`));
        }
        prompt();
      }
    },
  );
}

prompt();
