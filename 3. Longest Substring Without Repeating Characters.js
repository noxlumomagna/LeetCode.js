Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s){
    //create set which by definition can only have unique chars
    let set = new Set()
    //create value to store the length
    let storage = 0
    let longestLength = 0
    
    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[storage])
            storage++
        }
        set.add(s[i])
        longestLength = Math.max(longestLength, i-storage+1)
    }
    //disposal to store/remove non-relevant chars
    return longestLength
    //return length
}

//iterate across the string and compare values
//we want unique characters
//return length of string with most consecutive unique chars
