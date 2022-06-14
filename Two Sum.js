Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

//create two counters
//first counter iterating up to the 2nd to last number
//second counter iterating to the last number
 //checking if numbers add up to sum
 //if target is reached, return numbers as indicies

function twoSum(nums,target){
 for(let i=0; i<nums.length-1;i++){
     let left = nums[i]
 for(let j=i+1; j<nums.length; j++){
     let right = nums[j];
    if(left + right == target){
        return [i,j]
      }
    }
  }
} 
