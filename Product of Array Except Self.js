Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums){
    let answer = [];
    let product = 1;
    for(let i=0; i<nums.length; i++){
        answer[i] = product
    product = nums[i] * product
    }
    product = 1
    for(let j=nums.length-1; j>=0; j--){
        answer[j] = product * answer[j]
        product = nums[j] * product
    }
    return answer
};
