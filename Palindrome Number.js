Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

function isPalindrome(x){
    if(x < 0 || x >= 2**31 - 1) return false;
    let reversify = 0;
        for(let i=x; i>=1; i = Math.floor(i/10))
            reversify = (reversify * 10) + (i % 10);
    return reversify == x;
}
