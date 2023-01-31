function maxNum (arg){
    let max = arg[0];
    for(i=0; i<arg.length; i++){
        if (arg[i] > max){ //use less than symbol for minimum number
            max = arg[i];
            //will store the maximum value in max
        }
    }
    return max;
}

let arr = [0, 1, 25, 36, 45];
console.log(maxNum(arr));

let arr2 = [5000, 1, 25, 36, 45];
console.log(maxNum(arr2));

let arr3 = [0, 1589, 25, 36, 45];
console.log(maxNum(arr3));