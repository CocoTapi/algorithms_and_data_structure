function selectionSort(arr){
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    for (let i = 0; i < arr.length; i++){
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++){
            console.log(i, j)
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if (i !== lowest){
            console.log(arr)
            console.log("SWAPPING TO:")
            swap(arr, i, lowest);
            console.log(arr);
            console.log("**************");
        }
    }
    return arr;
}

const demo = selectionSort([34, 5, 10, 1,  2]);
console.log(demo);