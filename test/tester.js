const { _, log, program, prompts, colors, shell } = require('../lib/main')

async function test() {

  program
    .name(`cli`)
    .version('1.0.0', '-v, --version', 'output the current version')
    .description('description of cli...')

  program
    .command('foo')
    .description('Foo bar')
    .option('-n, --name <name>', 'Name of the foo')
    .option('-s, --source <source>', 'Source for the foo')
    .action((options) => {
      return new Promise((resolve, reject) => {
        resolve()
      })
    })

  // program.parse(['foo', 'cli', '-h'])
  await program.parseAsync(['foo', 'cli', '-h'])
  // await program.parseAsync(['foo', 'cli', 'foo'])


  shell.echo('foo bar')

  // child.execSync(`echo hello world`, { stdio: 'inherit' })

  // const bar = new Progress()
  // bar.start()
  // await _.sleep(250)
  // for (let ii = 0; ii < 50; ii++) {
  //   await _.sleep(50)
  //   bar.increment(1)
  // }
  // bar.setTotal(200)
  // for (let ii = 0; ii < 50; ii++) {
  //   await _.sleep(50)
  //   bar.increment(2)
  // }
  // bar.stop()

  // spinner.start('Here we go')
  // await _.sleep(1000)
  // for (let ii = 0; ii < 33; ii++) {
  //   spinner.text = `Cool beans #${ii + 1}`
  //   await _.sleep(100)
  // }
  // spinner.succeed('We did it!')
}

_.executor(test)
