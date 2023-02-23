function addNum (num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(addNum(2,8));


// using arguments to call extra arguments that are not initially declared
function async_addNum (inp1, inp2){
    let total = 0;
    for (i=0; i < arguments.length; i++){
        total = total + arguments[i];
    }
    return total;
}

console.log(async_addNum(5,6,7,8,9,10));