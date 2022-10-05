## Problem

Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

## Example

For `inputString = "crazy"`, the output should be `solution(inputString) = "dsbaz"`.

## Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 1000.

[output] string

The resulting string after replacing each of its characters.

## Inital Thoughts

1. create an array to hold each letter.
2. create a nested for loop to check if each element in the inputstring is equal to an element in
the alphabet, and if it is increment by +1 and push into new array.
3. If the element is = 'z' push 'a' inside the newString array.
4. join the elements in the array into one new string.
