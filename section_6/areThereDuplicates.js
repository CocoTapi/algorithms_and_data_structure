//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

//example
//areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true 

//multiple pointer, time: o(n log n ) , space o(1)
function areThereDuplicates(...args) {
    // sorting time complexity is o(n*log*n)
   args.sort((a, b) => {
       if (a < b) {
           return -1;
       } else if (a > b) {
           return 1;
       } else {
           return 0;
       }
   });
   
   let start = 0;
   let next = 1;
   
   while( next < args.length ) {
       if (args[start] === args[next]) {
           return true
       }
       start++;
       next++;
   }
   return false
  }

  //frequency counter, time: o(n), space o(n)

  function areThereDuplicates2() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

  //other solution, time: O(n), space: o(n)
  function areThereDuplicates3() {
    const set1 = new Set(arguments);
    return set1.size !== arguments.length
  }