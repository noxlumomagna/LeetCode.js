Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums){
    nums = nums.sort((a,b)=>a-b)
    let evenIndex = nums.filter((e,i)=>i%2 == 0)
    let oddIndex = nums.filter((e,i)=>i%2 !== 0)
    return evenIndex.find((e,i)=>e != oddIndex[i])
}
