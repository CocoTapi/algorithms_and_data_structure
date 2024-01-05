// Write a function called findLongestSubstring, 
// which accepts a string 
// and returns the length of the longest substring with all distinct(meaning no repeating) characters.

//examples
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// time: o(n)
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};//{t: 1, h: 2=> 7, i:3=> 5, s: 4=> 6}
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i]; //5//6
      if (seen[char]) { //i, s, h
        start = Math.max(start, seen[char]);  //(0, 3) => 3 //(3, 4)=> 4 //(4, 2)=> 4
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1); //(0,0-0+1)=> 1 //(1, 1-0+1=2)=> 2 //3 //4 //(4, 4-3+1= 2)=> 4//(4, 5-4+1=2)=> 4//(4, 6-4+1=3)=> 4
      // store the index of the next char so as to not double count
      seen[char] = i + 1; //1 //2 3//4//5 //5+1=6 //6+1=7
    }
    return longest;
  }