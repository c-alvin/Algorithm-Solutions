## Problem

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

## Example

Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

## Input/Output

The number of nodes in the list is in the range [1, 105].
1 <= Node.val <= 105

## Initial Thoughts

1. iterate through linked list to find length.
2. find the length and its even add 1
3. reiterate through linked list and if the node is === to the length -1,
4. assign node.next to node.next.next.
5. return head

## Post Thoughts

1.  forgot to account for edge case, if length <= 1, it should return null;

## Big O notation

- linear time O(n)
