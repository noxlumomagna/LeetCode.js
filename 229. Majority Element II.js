Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

function majorityElement(nums){
    let map = {}
    let result = []
    let length = nums.length
    for(let i=0;i<length;i++){
        let value = nums[i]
        map[value] = map[value]+1||1
    }
    for(let key in map){
        let occurence = map[key]
        if(occurence>length/3) result.push(key)
    }
    return result
};
