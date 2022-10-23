// eslint-disable-next-line no-unused-vars
var reverseList = function (head) {
  let previous = null;
  while (head !== null) {
    const nextNode = head.next;
    head.next = previous;
    previous = head;
    head = nextNode;
  }
  return previous;
};
