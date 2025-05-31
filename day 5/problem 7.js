// area of triangle by heron's formula 

// side of triangle is " a , b ,c " ;
// s = (a+b+c)/2
// area of triangle = root of[s(s-a)(s-b)(s-c)]

let a , b , c , s;

a = 11 ;
b = 12 ;
c = 13;

s = (a + b + c)/2

area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log("Area of triangle by heron's formula :", area.toFixed(2));

