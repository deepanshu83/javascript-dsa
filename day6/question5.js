// que 5 :- make this duplicate [1,2,3,4] to [1,2,3,4,1,2,3,4]
// in this que we learn and use 
// a.concat(a)

let a = [1,2,3,4] ;

let b = a.concat(a);

console.log(b);


// or other method 

function duplicate(arr){
   return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5,6]));