function newFunction(){
    console.log("Hello World \n");
}

newFunction();

//function with one parameter
function doubleIt(num){
    var result = num*2;
    console.log("double of "+ num + " is " + result + "\n");

    var alsoResult = result;
    return alsoResult;
}

doubleIt(6.9);
var firstNum = doubleIt(6.9);
doubleIt(69);
var secondNum = doubleIt(69);
var total = firstNum + secondNum;
console.log("Total of all input is: "+ total+ "\n");


//functionn with 2 parameter
function addtionFunction(num1, num2){
    console.log("First input value is "+ num1);
    console.log("Second input value is "+ num2);
    var sumNum = num1 + num2;
    return sumNum;
}

var sum = addtionFunction(6,9);
console.log("Summation all of input is "+ sum);