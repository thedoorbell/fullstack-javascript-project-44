#!/usr/bin/env node

import askIsEven from '../src/even.js';
import getName from '../src/cli.js';

const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
askIsEven(name);
