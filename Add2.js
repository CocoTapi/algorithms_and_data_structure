//write a function which takes in a string and returns counts of each character in the string. 

//expamples
// charCount('aaaa'); // {a: 4}
// charCount('hello') //{h: 1, e: 1, l: 2, o: 1}
// charCount('my phone number is 12345') //spacing?
// charCount('Hello hi') //upper and lower cases?
// charCount('') // empty string?
// charCount(12) // invalid inputs?

// function charCount(str) {
//     //make object to return at the end
//     //loop over string for each character...
//         //if the char is a number/letter AND a key in object, add it to count
//         //if the char is  a number/letter AND not in object, add it and set value to 1
//         //if character is something else(space, period, etc) don't do anything
//     //return an object with keys that are lowercase alphanumeric characters in the string; 
// }

// ANSWER 1
// function charCount(str) {
//     var obj = {};
//     for ( var i = 0; i < str.length; i++){
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1
//             }
//         }
//     }
//     return obj
// }

//refactor; ANSWER 2
function charCount(str) {
    var obj = {};
    for (var char of str){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

//fastest 
// function charCount(str) {
//     var obj = {};
//     for (var char of str){
//         if (isAlphaNumeric(char)) {
//             char = char.toLowerCase();
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj
// }

// function isAlphaNumeric(char) {
//     var code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) && //numeric (0-9)
//         !(code > 64 && code < 91) && //upper alpha (A-Z)
//         !(code > 96 && code < 123)) { //lower alpha (a-z)
//             return false;
//         }
//         return true;
// }

console.log(charCount('Hello hi'));