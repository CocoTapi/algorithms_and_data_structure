//hash("pink")
//"a".charCodeAt(0) //97
//"hi".charCodeAt(0) //104
//"hi".charCodeAt(1) //105
// 13 % 3 //1

//only for strings
//not constant time - linear in key length
//could be little more random

// function hash(key, arrayLength) {
//     let total = 0;
//     for (let char of key) {
//         //map "a" to 1, "b" to 2, "c" to 3, etc...
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLength;
//     }
//     return total;
// }

// console.log(hash("pink", 10)) // 0
// hash("orange", 10)  //7
// hash("cyan", 10)  //3

//improved version
function hash(key, arrayLen) {
    let total = 0;
    let WIRED_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WIRED_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash("pink", 10))

