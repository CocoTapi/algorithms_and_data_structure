// function babbleSort(arr) {
//     for (let i = arr.length; i > 0; i--){
//         for (let j = 0; j < i - 1; j++){
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1]){
//                 //swap
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

function bubbleSort(arr){
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    };

    let noSwaps;

    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for (let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

const demo = bubbleSort([3, 37, 22, 45, 29, 8]);
console.log(demo);