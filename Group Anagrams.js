Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function groupAnagrams(strs){
        let map = new Map();
    for (let str of strs) {
        let arr = str.split('');
        arr.sort();
        let key = arr.join('');
        let value = map.get(key) ? map.get(key) :[];
        value.push(str);
        map.set(key, value);
    }
    return Array.from(map.values());
};
