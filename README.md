# @basd/cli

> take command

[![npm](https://img.shields.io/npm/v/@basd/cli?style=flat&logo=npm)](https://www.npmjs.com/package/@basd/cli)
[![pipeline](https://gitlab.com/frenware/utils/cli/badges/master/pipeline.svg)](https://gitlab.com/frenware/utils/cli/-/pipelines)
[![license](https://img.shields.io/npm/l/@basd/cli)](https://gitlab.com/frenware/utils/cli/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/@basd/cli)](https://www.npmjs.com/package/@basd/cli) 

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/frenware/utils/cli)
[![Github](https://img.shields.io/badge/Github%20-%20?logo=github&color=%23383a40)](https://github.com/basedwon/cli)
[![Twitter](https://img.shields.io/badge/@basdwon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

A comprehensive Node.js module providing a set of tools for creating elegant command line interfaces by wrapping several popular CLI tools into one cohesive package. This project simplifies CLI development by combining functionality from various libraries, including command parsing, user interaction, and system command execution.

## Features

- **Commander Integration**: Leverages `commander` for powerful command-line interfaces.
- **Progress and Spinner**: Includes `@basd/spinner`, a mix of `cli-spinner` and `cli-progress` for interactive CLI feedback.
- **CLI Utilities**: Offers utilities from `basd` (a lodash wrapper), `shelljs` for shell commands, `prompts` for interactive user inputs, and `cli-color` for colorful CLI output.

## Installation

Install `@basd/cli` using npm:

```bash
npm install @basd/cli
```

## Usage

The `@basd/cli` module is designed to be intuitive for developers familiar with Node.js CLI development. Here's some examples to get you started:

### Commander

The `commander` module in `@basd/cli` is used for building command-line interfaces with support for commands, options, and sub-commands.

```js
const { program } = require('@basd/cli')

// Define a new command with options
program
  .command('serve [port]')
  .description('Start the server')
  .option('-d, --debug', 'output extra debugging')
  .action((port, options) => {
    const portNumber = port || 3000
    console.log(`Server running on port ${portNumber}`)
    if (options.debug) console.log('Debugging mode is on')
  })

// Parse command-line arguments
program.parse(process.argv)
```

### ShellJS

`ShellJS` is integrated for executing shell commands in a Unix shell-style, but within your Node.js scripts.

```js
const { shell } = require('@basd/cli')

// Execute a simple UNIX command
shell.exec('echo hello world')

// Use it in a more complex scenario
if (shell.exec('git status').code !== 0) {
  shell.exit(1)
}
```

### Prompts

The `prompts` module is excellent for creating interactive command-line prompts.

```js
const cli = require('@basd/cli')

async function askName() {
  const response = await cli.prompts({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })

  console.log(`Hello, ${response.name}!`)
}

askName()
```

### Progress and Spinner

`Progress` and `Spinner` from `@basd/spinner` provide visual feedback for CLI applications.

### Spinners

```js
const { Spinner } = require('@basd/spinner')

const spinner = new Spinner({
  id: 'unique-spinner-id', // optional
  color: 'green', // optional
  spinner: 'dots' // optional, spinner style
})

spinner.start('Loading...')
// Update the spinner
spinner.update('Still loading...')
// Complete the spinner
spinner.succeed('Completed!')
```

### Progress Bars

```js
const { Progress } = require('@basd/spinner')

const progressBar = new Progress({
  total: 100, // total value of the progress bar
  preset: 'shades_classic' // optional, style of the progress bar
})

progressBar.start(0)
// Increment the progress
progressBar.increment(10)
// Update the progress bar to a specific value
progressBar.update(50)
// Complete the progress
progressBar.stop()
```

### Colors

```js
const { colors } = require('@basd/cli')

console.log(colors.red('This is a red text'))
```

## Documentation

- [API Reference](/docs/api.md)

- [**commander**](https://npmjs.com/package/commander){:target="_blank"}: Interface for defining commands and options.
- [**Progress & Spinner**](https://npmjs.com/package/@basd/spinner){:target="_blank"}: Utilities for displaying progress bars and spinners.
- [**prompts**](https://npmjs.com/package/prompts){:target="_blank"}: For creating interactive command-line prompts.
- [**colors**](https://npmjs.com/package/cli-color){:target="_blank"}: Enhance your CLI output with colored text.
- [**shell**](https://npmjs.com/package/shelljs){:target="_blank"}: Execute shell commands within your Node.js application.

For more detailed usage of each module, refer to their respective documentation.

## Tests

In order to run the test suite, simply clone the repository and install its dependencies:

```sh
git clone https://github.com/basedwon/cli.git
cd cli
npm install
```

To run the tests:

```sh
npm test
```

## Contributing

Thank you! Please see our [contributing guidelines](/docs/contributing.md) for details.

## Donations

If you find this project useful and want to help support further development, please send us some coin. We greatly appreciate any and all contributions. Thank you!

**Bitcoin (BTC):**
```
1JUb1yNFH6wjGekRUW6Dfgyg4J4h6wKKdF
```

**Monero (XMR):**
```
46uV2fMZT3EWkBrGUgszJCcbqFqEvqrB4bZBJwsbx7yA8e2WBakXzJSUK8aqT4GoqERzbg4oKT2SiPeCgjzVH6VpSQ5y7KQ
```

## License

@basd/cli is [MIT licensed](https://gitlab.com/frenware/utils/cli/-/blob/master/LICENSE).
