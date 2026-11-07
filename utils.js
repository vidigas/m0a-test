'use strict';

/**
 * Throws a TypeError unless `n` is a non-negative integer.
 *
 * @param {number} n - The value to check.
 * @param {string} name - The calling function's name, used in the error message.
 * @throws {TypeError} If `n` is not a non-negative integer.
 * @private
 */
function assertNonNegativeInteger(n, name) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError(`${name}: expected a non-negative integer, got ${n}`);
  }
}

/**
 * Checks whether a number is prime.
 *
 * Uses trial division by 2, 3, and numbers of the form 6k ± 1 up to √n.
 * Returns false for non-integers, negative numbers, 0, and 1.
 *
 * @param {number} n - The number to test.
 * @returns {boolean} `true` if `n` is a prime number, otherwise `false`.
 * @example
 * isPrime(7);  // true
 * isPrime(10); // false
 * isPrime(1);  // false
 */
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n < 4) return true; // 2 and 3
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Returns the nth Fibonacci number, where fibonacci(0) = 0 and fibonacci(1) = 1.
 *
 * Computed iteratively in O(n) time and O(1) space. Results are exact
 * up to n = 78; beyond that they exceed Number.MAX_SAFE_INTEGER and lose precision.
 *
 * @param {number} n - The zero-based index in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws {TypeError} If `n` is not a non-negative integer.
 * @example
 * fibonacci(0);  // 0
 * fibonacci(10); // 55
 */
function fibonacci(n) {
  assertNonNegativeInteger(n, 'fibonacci');
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

/**
 * Returns n factorial (n!), the product of all positive integers up to `n`.
 *
 * By definition, factorial(0) = 1. Results are exact up to n = 18;
 * beyond that they exceed Number.MAX_SAFE_INTEGER and lose precision,
 * and for n > 170 the result is Infinity.
 *
 * @param {number} n - The number to compute the factorial of.
 * @returns {number} The value of n!.
 * @throws {TypeError} If `n` is not a non-negative integer.
 * @example
 * factorial(0); // 1
 * factorial(5); // 120
 */
function factorial(n) {
  assertNonNegativeInteger(n, 'factorial');
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = { isPrime, fibonacci, factorial };
