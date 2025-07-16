// Que 1 :- given a strin , reverse each word in the sentence ??
// in this que we learn and use
//  .split() 
//  .reverse()  
//  .join()
//  .map
//  .forEach

let Str = "hey buddy What's your name";

let newStr = Str.split(" ")
.map(function(word){
     return word.split("").reverse().join("")
})

console.log(newStr.join(" "));