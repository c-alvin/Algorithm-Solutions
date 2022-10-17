## Problem

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

## Example

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false

## Input/Output

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.

## Inital Thoughts

1. Create a map to check for existence.
2. since the string can only contain letters, i can just check to see if the count after looping through the map === 26.

## Big O notation
- This solution is in linear time O(n).
