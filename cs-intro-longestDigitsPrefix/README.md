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

1. iterate through string, if value is equal to a number or 0 add to the prefix
2. Else break the loop.
