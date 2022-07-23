/* eslint-disable no-console */
import chalk from 'chalk';

const {
  red, yellow, cyan, green,
} = chalk;

export default {
  info: (text) => console.log(cyan(text)),
  warn: (text) => console.log(yellow(text)),
  error: (text) => console.log(red(text)),
  success: (text) => console.log(green(text)),
};
