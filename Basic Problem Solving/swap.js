// using a temoprary variable to swap. Works with any value
let a = 9;
let b = 6;
console.log("Before Swap: "+ "a = "+a +"  b = "+b);

let temp = 0; 
temp = a;  // temp = 9
a = b;     // a = 6
b = temp;  // b = 9
console.log(`After Swap: a = ${a}  b = ${b} \n`);


// using arithmatic operator. Only works with neumerical values
let x = 7; 
let y = 1;
console.log(`Before Swap: x = ${x}  y = ${y}`);
x = x + y;  // x = 1 + 7 = 8
y = x - y;  // y = 8 - 1 = 7
x = x-y;    // x = 8 - 7 = 1
console.log(`After Swap: x = ${x}  y = ${y} \n`);


// using array. Works on any type 
let av1 = 89;
let av2 = 56;
console.log(`Before Swap: av1 = ${av1}  av2 = ${av2}`);
[av1 , av2] = [av2 , av1];
console.log(`After Swap: av1 = ${av1}  av2 = ${av2}`);