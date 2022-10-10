Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s,t){
    if(s.length != t.length) return false
    s = s.split('').sort()
    t = t.split('').sort()
    for(let i=0;i<s.length;i++){
        if(s[i] != t[i]) return false
    }
    return true
};

or

function isAnagram(s,t){
    if(s.length != t.length) return false
    let comparison = {}
    
    for(let i=0;i<s.length;i++){
        comparison[s[i]] = (comparison[s[i]] || 0) + 1
        comparison[t[i]] = (comparison[t[i]] || 0) - 1
    }
    for(let instance in comparison){
        if(comparison[instance] !== 0) return false
    }
    return true
};
