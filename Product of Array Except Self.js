Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums){
  let outputArr = []
  let product = 1;
  for(let i=0; i<array.length;i++){
    outputArr[i] = product;
    product = array[i] * product;
  }
  product = 1;
  for(let j=array.length-1; j>=0; j--){
    outputArr[j] = product * outputArr[j]
    product = array[j] * product
  }
  return outputArr
};
