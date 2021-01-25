#!/usr/bin/env node
/* eslint-disable global-require */

const { program } = require('commander');

const { version } = require('../package.json');

program.version(version);

program.command('clean').action(() => {
  require('../lib/init-env');
  require('../lib/command').clean();
});

program.command('dev').action(() => {
  process.env.NODE_ENV = 'development';
  require('../lib/init-env');
  require('../lib/command').dev();
});

program.command('build').action(() => {
  process.env.NODE_ENV = 'production';
  require('../lib/init-env');
  require('../lib/command').build();
});

program.parse(process.argv);
