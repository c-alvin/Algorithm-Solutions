## Problem

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

## Example

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

## Input/Output

-231 <= x <= 231 - 1

## Initial Thoughts

1. push the reverse values into a new array.
2. join the values of the arry and multiply by the -1 or 1 depending on what the original value was.
3. account for the limits.
