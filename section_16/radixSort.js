function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);

    for (let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        //console.log(nums);
    }
    return nums
}

const demo = radixSort([2, 42, 1462, 73845, 6568, 34, 22, 1]);
console.log(demo);