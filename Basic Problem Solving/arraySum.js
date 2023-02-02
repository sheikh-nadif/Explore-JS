function arraySum (n){
    let sum = 0;
    for (i = 0; i < n.length; i++){
        sum = sum + n[i];
    }
    return sum;
}

let array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arraySum(array1),"\n");

let array2 = [0, 0, 0, 2, 0, 0, 1];
console.log(arraySum(array2),"\n");

//directly giving array as argument.
console.log(arraySum([1, 2, 8, 9, 63]),"\n"); 