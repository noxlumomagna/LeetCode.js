Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//create a memory
//iterate through array and check all elements for repeat values
  //if value is "new" push to memory
  //if value does exist in memory, return true

function containsDuplicate(num){
num.sort((a,b)=>a-b);
  for(let i=0; i<num.length; i++){
    if (i > 0 && num[i-1] == num[i]) return true; 
}  
return false;
}

or 

containsDuplicate=nums=>new Set(nums).size !== nums.length;

or

function containsDuplicate(nums){
    let hash = new Set()
    for(let i=0;i<nums.length;i++){
        if(hash.has(nums[i])) return true
        else hash.add(nums[i])
    }
    return false
}
