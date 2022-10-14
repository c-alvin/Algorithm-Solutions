// eslint-disable-next-line no-unused-vars
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
