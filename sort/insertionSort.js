function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for (var j = j -1; j >= 0 && arr[j] > currentVal; j--){
                arr[j + 1] = arr[j]
                console.log(arr);
        }
        arr[j + 1] = currentVal
    }
    return arr;
}