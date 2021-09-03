var reverseBetween = function (head, left, right) {
  let i = 1;
  let prev = null;
  let curr = head;
  while (i < left) {
    prev = curr;
    curr = curr.next;
    i++;
  }

  let reserve = null;
  let curr2 = curr;
  while (i <= right) {
    const next = curr2.next;
    curr2.next = reserve;
    reserve = curr2;
    curr2 = next;
    i++;
  }

  curr.next = curr2;
  if (prev) {
    prev.next = reserve;
    return head;
  } else {
    return reserve;
  }
};
