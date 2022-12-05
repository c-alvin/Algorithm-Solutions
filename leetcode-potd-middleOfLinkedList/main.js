// eslint-disable-next-line no-unused-vars
var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;

};
