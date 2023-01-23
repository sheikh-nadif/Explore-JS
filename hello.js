var bananaPrice = "12";
console.log("bananaPrice",parseInt(bananaPrice), typeof bananaPrice, "\n");


// "typeof" is used for identifying the type of any variable//
var stringVar1 = "Hello"; //String//
var stringVar2 = 'World'; //String//
var intVar     =  69;     //Number Integer//
var floatVar   =  6.9;    //Number Float//

console.log(stringVar1, "is a", typeof stringVar1);
console.log(stringVar2, "is a", typeof stringVar2);
console.log(intVar, "is a", typeof intVar);
console.log(floatVar, "is a", typeof floatVar, "\n");



//String to Number Convertion vice-versa//
var numString = '60';
var num2      =  9;

//Convertion using "parseInt"// 
//Can also be done using "parseFloat" for float/decimal type//
num3 = parseInt(numString); 
//can also be stored in the same variable like...// 
//"numString = parseInt(numString);"//
console.log("Sum of the variables is", num3 + num2, "and it is a", typeof (num3 + num2), "\n"); 

//Convertion using "+"// 
num4 = + numString;
console.log("Sum of the variables is", num4 + num2, "and it is a", typeof (num4 + num3), "\n"); 

//Convertion to String using (''+) //
num5 = parseInt(numString) + num2;
num5 = '' + num5; //must have to be empty String//
console.log("Sum of the variables is", num5, 'and it is a', typeof num5); 

//Dealing with fractions//
console.log("\n");
var fractionValue = 69.99;
console.log("Round of 69.99 is",Math.round(fractionValue)); //will round to 70//
console.log("Ceil will choose the upper closest value to round, So, 69.99 will round to",Math.ceil(fractionValue));  //will round to 70; close to maximum//
console.log("Floor will choose the lower closest value to round, So, 69.99 will round to",Math.floor(fractionValue)); //will round to 69; close to minimum//