// Write a function called averagePair.
// Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

//Time: O(N) , Space: O(1)
function averagePair(arr, num){
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let newNum = (arr[start] + arr[end]) / 2;
        if (newNum === num) {
            return true
        } else if (newNum < num) {
            start++;
        } else {
            end--;
        }
    }
    return false
   
  }