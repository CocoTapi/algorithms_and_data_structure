// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 //6, 5, 4, 3, 2, 1, 
// recursiveRange(10) // 55 

function recursiveRange(num){
    if(num < 1) return 0;
    
    return num + recursiveRange(num - 1);
}