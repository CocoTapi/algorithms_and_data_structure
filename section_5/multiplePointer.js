// write a function called sumZaro which accepts a sorted array of integers.
// the function should find the first pair where the sum is 0. 
//return an array that includes both alues that sum to zero or undefined if a pair does not exist

//sumZero[-3, -2, -1, 0, 1, 2, 3] //[-3, 3]
//sumZaro(-2, 0, 1, 3) //undefined
//sumZero([-4, -3, -2, -1, 0, 1, 2, 5])

//have 2 pointers left and right side
// while left < right, 
    //the sum = 0, return the 2 num, 
    //sum > 0, right pointer moves to left
    //sum < 0, left pointer moves to right  

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));