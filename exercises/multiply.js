'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
const multiply = (numberOne, numberTwo) => {

  let count = 1;
  let result = 0;

  if (numberOne < 0 && numberTwo < 0) {
    while (count <= -numberTwo) {
      result = result + numberOne;
      count += 1;
    };
    return -result;
  } else if (numberOne > 0 && numberTwo < 0) {
    while (count <= numberOne) {
      result += numberTwo;
      count += 1;
    };
    return result;
  } else {
      while (count <= numberTwo) {
        result = result + numberOne;
        count += 1;
      };
    return result;
  };
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
