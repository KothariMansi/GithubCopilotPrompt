'use strict';

const readline = require('readline');

/**
 * Prompt the user with a question and return the input as a trimmed string.
 * @param {string} question - The prompt question to display.
 * @returns {Promise<string>}
 */
function prompt(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });

    rl.on('SIGINT', () => {
      rl.close();
      // mimic default Node behavior on SIGINT
      process.kill(process.pid, 'SIGINT');
    });
  });
}

module.exports = prompt;

// Example usage when run directly:
// node basic_prompt.js
if (require.main === module) {
  (async () => {
    try {
      const name = await prompt('Enter your name: ');
      console.log(`Hello, ${name || 'stranger'}!`);
    } catch (err) {
      console.error('Prompt failed:', err);
      process.exitCode = 1;
    }
  })();
}