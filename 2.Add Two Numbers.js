You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function addTwoNumbers(l1,l2){
    let num1 = 0,
        num2 = 0,
        carry = 0,
        solution = new ListNode(null),
        current = solution
    
    while(l1 || l2){
        num1 = (l1) ? l1.val : 0
        num2 = (l2) ? l2.val : 0
        
        if(num1+num2+carry>9){
        current.next = new ListNode(num1 + num2 + carry - 10)
        current = current.next
            carry = 1
        } else {
        current.next = new ListNode(num1 + num2 + carry)
        current = current.next
            carry = 0
        }
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
    }
    if(carry) current.next = new ListNode(carry)
    return solution.next
}
