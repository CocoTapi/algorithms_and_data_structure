// implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in an array. 
// there can be negative nnumbers in the array but it'll akways be sorted. 

// countUniqueValues([1, 1, 1, 2]) => 2
// countUniqueValues([-1, -2, 3, 4, 4, 5, 6, 6, 8, 8, 9]) => 8
// countUniqueValues([]) => 0

// step
// compare i to j (i=0, j=1)

function countUniqueValues(arr) {
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        } 
    }
    return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 2]));