## Problem

Find the leftmost digit that occurs in a given string.

## Example

For inputString = "var_1__Int", the output should be
solution(inputString) = '1';
For inputString = "q2q-q", the output should be
solution(inputString) = '2';
For inputString = "0ss", the output should be
solution(inputString) = '0'.

## Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string containing at least one digit.

Guaranteed constraints:
3 ≤ inputString.length ≤ 10.

[output] char

## Initial Thoughts

1. Use a regex to replace all non digits to empty strings
2. Assign the return value at the index of 0 to num.
3. return num

## Big O Notation
- O(n) Linear time
