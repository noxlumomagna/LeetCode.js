Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head){
  let prevNode = null
  while(head){
    let nextNode = head.next
    head.next = prevNode
    prevNode = head
    head = nextNode
  }
  return prevNode
}
