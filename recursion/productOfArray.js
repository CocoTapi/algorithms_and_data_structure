//answer 1
function productOfArray(arr) {
    if(!arr.length) return null;
    let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
      let num = arr[i];
      total = total * num;
  }
  
  return total;
}

//2
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    
    return arr[0] * productOfArray(arr.slice(1));
 }