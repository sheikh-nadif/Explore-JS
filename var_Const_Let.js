var num = 45;               // Common method for Variable declaration

const country = "Nepal";    // Constant are not meant to be changed after declaration

let topSeller = 'Potato';   // Let are meant to be changed after declaration, but cannot be redecalered

// 'const' and 'let' will mostly be used in ES6
 
console.log('Top selling product of '+ country +' is '+ topSeller +', sold '+ num +'% \n');

// country = Germany; // Will show error as const value is changed
// console.log('Top selling product of '+ country +' is '+ topSeller +', sold '+ num +'%');

// Only use const when you are sure that the stored value should not be changed//

//Example of Var vs Let
var x = 4;
console.log(x);
var x = 3;
console.log(x); // it will not show any error

let y = 4;
    y = 2;
console.log(y); // will work fine even though 'y' is value updated.
// let y = 3;
// console.log(y); //it will show error as ;y' is already been declared once