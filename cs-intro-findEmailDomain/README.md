## Problem

Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

## Example

For address = "prettyandsimple@example.com", the output should be
solution(address) = "example.com";
For address = "fully-qualified-domain@codesignal.com", the output should be
solution(address) = "codesignal.com".

## Input/Output

[execution time limit] 4 seconds (js)

[input] string address

Guaranteed constraints:
10 ≤ address.length ≤ 50.

[output] string



## Initial Thoughts

1. split the string by @ symbols, take the last item in the array.
