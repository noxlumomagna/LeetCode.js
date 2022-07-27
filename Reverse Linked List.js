Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head){
    let previous = null
    while(head){
        let next = head.next;
        head.next = previous;
        previous = head;
        head = next
    }
    return previous
};
