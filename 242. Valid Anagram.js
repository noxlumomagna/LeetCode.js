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
    let hashMap = {}
    if(s.length != t.length) return false;

    for(let i=0;i<s.length;i++){
        hashMap[s[i]] = (hashMap[s[i]] || 0) + 1
        hashMap[t[i]] = (hashMap[t[i]] || 0) - 1
    }
    for(let chickenNugget in hashMap){
        if(hashMap[chickenNugget] !== 0) return false
    }
    return true
};

or

function isAnagram(s,t){
    if (s.length != t.length) return false;
    let record = new Array(26).fill(0);
    let base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; ++i) {
        ++record[s.charCodeAt(i) - base];
        --record[t.charCodeAt(i) - base];
    }
    return record.every(v => v == 0);
};
