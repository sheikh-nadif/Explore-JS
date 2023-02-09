// Find the smallest name in the array

function smallName (n){
    let smallest = n[0];
    let smallArr = [];
    for (i = 0; i < n.length; i++){
        console.log(n[i], n[i].length)
        if (n[i].length <= smallest.length){
            smallest = n[i];
            smallArr.push(n[i]);
        }
    }

    if (smallArr.length > 1){ // In case for names with similar length will return array
        if (smallArr[0].length > smallArr[1].length){
            smallArr.shift();
        }
        return smallArr;
    }

    else{
        return smallest;
    }
}

console.log("\n Smallest Name/Names: ",smallName( ["Su", "Sun", "Dan", "abir", "sam", "badhon", "jon"]));