//Give two strings, write a function to determine if the second string is an anagram of the first. 

//validAnagram("aaz", "zza") => false
//validAnagram("awesome", "awesom") => false

//steps
//check if the both are the same length
// make an object. when letter exist: +1, otherwise set to 1 
// can't find letter or letter is zero, return false. otherwise -1


function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
};

console.log(validAnagram( "akazi" , "ziaam" ));