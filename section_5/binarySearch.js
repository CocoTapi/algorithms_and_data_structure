// given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the function is located
// if the value is not found, return -1

// search([1, 2, 3, 5, 8, 9, 10], 5) => 3

// steps: binary search 
// divide data into smaller subsets
// ignore other ones

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1;
}

console.log(search([1, 2, 3, 5, 8, 9, 10], 5));
//time complexity: log(n)