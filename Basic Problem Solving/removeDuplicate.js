function duplicate (n){
    let unique = [];
    for (i = 0; i < n.length; i++){
        let index = unique.indexOf(n[i]);
        if (index == -1){  // index = -1 means the element is not in the array.
            unique.push(n[i]);
        }
    }
    return unique;
}


let array1 = [1, 2, 3, 4, 5, 6, 7]; // will return same as no duplicate
console.log(duplicate(array1),"\n");

let array2 = [0, 0, 0, 2, 0, 0, 1]; // will return  [0, 2, 1]
console.log(duplicate(array2),"\n");

//directly giving array as argument. will return [1, 2, 8, 9, 63]
console.log(duplicate([1, 2, 8, 8, 2,  9, 63]),"\n"); 