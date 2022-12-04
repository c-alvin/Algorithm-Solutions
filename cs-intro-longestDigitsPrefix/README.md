## Problem

Given a string, output its longest prefix which contains only digits.

## Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".

## Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 100.

[output] string

[output] boolean

true if name is a correct variable name, false otherwise.

## Initial Thoughts

1. First check if the first value is a number, if so return false.
2. check if the other numbers are alphanumeric or equal to '_'
