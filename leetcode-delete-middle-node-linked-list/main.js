// eslint-disable-next-line no-unused-vars
var deleteMiddle = function (head) {
  let length = 0;
  let c1 = head;
  let c2 = head;

  while (c1) {
    c1 = c1.next;
    length++;
  }

  if (length <= 1) {
    head = head.next;
    return head;
  }

  if (length % 2 === 0) {
    length++;
  }

  const middleNode = Math.ceil(length / 2);

  let counter = 1;

  while (c2) {
    if (counter === middleNode - 1) {
      c2.next = c2.next.next;
    }
    counter++;
    c2 = c2.next;
  }
  return head;
};
