'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (str) => {
  return str.replace(/\b\w/g, l => l.toUpperCase());
};

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("jaden smith"), 'Jaden Smith')
// End of tests */
