//O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//O(1)
// function addUpTo(n) {
//     return n * (n + 1) / 2
// }

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${time2 - time1 / 1000} seconds`)

// console.log(addUpTo(5));
