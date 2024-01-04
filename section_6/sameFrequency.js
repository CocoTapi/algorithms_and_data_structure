//Write a function called sameFrequency. 
//Given two positive integers, find out if the two numbers have the same frequency of digits.

//time: o(n)

//sameFrequency(2, 10) false
//sameFrequency(12, 21) true

//steps
// if length isn't the same, return false
// make a lookup object, key is num, value is how many time used
// for loop to check num2 has them.

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    const target1 = num1.toString();
    const target2 = num2.toString();
    
    if (target1.length !== target2.length) {
        return false;
    }
    const countNum1 = {};
    const countNum2 = {};
    
    for (let i = 0; i < target1.length; i++) {
        let val = target1[i];
        countNum1[val] = (countNum1[val] || 0) + 1
    }
    
    for (let j = 0; j < target2.length; j++) {
        let val = target2[j]
        countNum2[val] = (countNum2[val] || 0) + 1
    }
    
    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]){
            return false;
        }
    }
    return true;
  }
  