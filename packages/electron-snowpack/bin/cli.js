#!/usr/bin/env node
/* eslint-disable global-require */

const { program } = require('commander');

const { version } = require('../package.json');

program
  .version(version)
  .option('--verbose', 'Enable verbose log messages')
  .on('option:verbose', () => {
    process.env.VERBOSE = true;
  })
  .option('--quiet', 'Enable minimal log messages')
  .on('option:quiet', () => {
    process.env.QUIET = true;
  });

program
  .command('clean')
  .description('Wipe built assets')
  .action(() => {
    require('../lib/init-env');
    require('../lib/command/clean')();
  });

program
  .command('dev')
  .description('Develop your project locally')
  .option('-- <args...>', 'electron arguments')
  .action((options, command) => {
    process.env.NODE_ENV = 'development';
    require('../lib/init-env');
    require('../lib/command/dev')(
      program.args.filter((arg) => arg !== command.name()),
    );
  });

program
  .command('build')
  .description('Build your project for production')
  .action(() => {
    process.env.NODE_ENV = 'production';
    require('../lib/init-env');
    require('../lib/command/build')();
  });

program.parse(process.argv);
