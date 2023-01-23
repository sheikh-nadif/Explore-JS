for (var i = 60; i<70; i++){
    if (i==69){
        console.log("hmmmmmm " + i +"\n");
    }
    else{
        console.log(i)
    }
}

//for loop to access array

var numArray = [1, 2, 6, 8, 98, 69];
var numElement = 0;
for (i = 0; i < numArray.length; i++){
    var element = numArray[i];
    console.log("Array element no: "+ i + " is  " + element);

        if(numElement==0){
            numElement = numArray[i];
        }
        else{
            numElement = numElement +" "+ numArray[i];
        }
}

console.log("Sequence of Array is "+ numElement);