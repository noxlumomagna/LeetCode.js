Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function missingNumber(nums){
    return ((1+nums.length)*nums.length)/2 - nums.reduce((a,b)=>(a+=b),0)
}
