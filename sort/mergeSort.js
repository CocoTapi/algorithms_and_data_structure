// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length){
//         if (arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++
//         } else {
//             results.push(arr2[j]);
//             j++
//         }
//     }
//     while( i < arr1.length) {
//         results.push(arr1[i]);
//         i++
//     }
//     while( j < arr2.length) {
//         results.push(arr2[j]);
//         j++
//     }
//     return results;
// }

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
    
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right)

// } 

var merge = function(nums1, m, nums2, n) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            results.push(nums1[i]);
            i++;
        } else {
            results.push(nums2[j]);
            j++;
        }
    } 

    while (i < m) {
        results.push(nums1[i]);
        i++;
    }

    while (j < n) {
        results.push(nums2[j]);
        j++;
    }

    return results;
};

const demo = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(demo);