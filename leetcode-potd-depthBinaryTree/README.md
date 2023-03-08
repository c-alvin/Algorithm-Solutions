## Problem

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Example

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2

## Input/Output

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

## Initial Thoughts

1. if root equals to undefined or null return 0;
2. return max method of the math object with the arguements of root.left, root.right +1
