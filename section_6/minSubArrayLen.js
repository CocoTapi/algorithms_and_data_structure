// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

//example:
//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

//time: o(n), space: o(1)

/*
1. make a variable to store minimal length, called minLen
2. set 2 pointers, called start and end
3. make a variable to store total of subarray, called total.
4. while start < length of nums
    a. if total is less than sum and end is less than nums' length
        i. add the end item to total
        ii. move end to right to add it in subarray
    b. if total is greater than or equal to sum
        i. choose a smaller number between the number of subarray and minLen as minLen
        ii. remove the start item from total
        iii. move start to right to remove it in subarray
    c. else 
        i. break the loop
5. if minLen = infinity, return 0, 
    otherwise return minLen
*/

function minSubArrayLen(nums, sum) {
    let total = 0; //
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){ //0 < 11 && 0 < 7
        total += nums[end]; //4 +3=7+ 3=10+8 = 18 //8+1=9 //9+2=11 //3+3=6 
              end++;//1=>2=>3=>4=>5=>6=> 7
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start); //(inf, 4-0) => 4 // (4, 4-1=3)=> 3 //(3, 4-2=2)=> 2 (2, 6-3=3)=> 2
              total -= nums[start]; // 18-4=14 //14-3=11 //11-3=8 //11-8=3
              start++; //1 //2 //3 //4
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen; //2
  }


  //another answer
  function minSubArrayLen(nums, sum) {
   if(nums[0] >= sum) return 1;
    
   let minLen = Infinity;
   let start = 0;
   let end = 0;
   let total = 0;
   
   while(start < nums.length ) {
       if(total < sum && end < nums.length) {
           total = total + nums[end];
           end++;
       } else if (total >= sum) {
           minLen = Math.min(minLen, (end - start));
           total = total - nums[start];
           start++;
       } else {
           break;
       }
   }
   if(minLen === Infinity) {
       return 0;
   } else {
       return minLen;
   }
   
}
