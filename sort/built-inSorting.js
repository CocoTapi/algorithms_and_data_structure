function numberCompare(num1, num2) {
    return num2 - num1;
}

const answer = [6, 2, 4, 10, 1].sort(numberCompare);
console.log(answer);

function compareByLen(str1, str2){
    return str2.length - str1.length;
}

const answer2 = ["elephant", "cat", "tiger", "bird"].sort(compareByLen);

console.log(answer2);