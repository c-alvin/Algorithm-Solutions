## Problem

Given the head of a singly linked list, reverse the list, and return the reversed list.



## Example

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []


## Input/Output

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000


## Initial Thoughts

1. create a variable named previous and set to null.
2. create a variable called nextNode and assign head.next to that variable.
3. head.next = previous.
4. previous = head;
5. head = nextNode
