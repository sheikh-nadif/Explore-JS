var newArray = [1, 2, 3];
console.log(newArray);
console.log(newArray.length); // show the lenght of an array
console.log(newArray.indexOf(2)); 
// shows index position of a specified array item
// index of 2 is 1 cause array position starts with 0

newArray.push(4); // adds new element at the end of an array
console.log(newArray);

newArray.unshift(0); // adds new element at the beginning of an array
console.log(newArray);
console.log("\n");


newArray.pop(); // removes last element at the end of an array
console.log(newArray);

newArray.shift(); // removes first element at the beginning of an array
console.log(newArray);
console.log("\n");


newArray = [1,2,3,4,5,6]
var sliceArray = newArray.slice(2,5); 
// will create a copy of sliced array starting from the 2 or third postion and ending before 5 or sixth postion (for this example)
console.log(sliceArray);
console.log(newArray); // orginal array remains unchanged
console.log("\n");

var spliceArray = newArray.splice(3,7);
// will slice and split a part of the array 
console.log(spliceArray);
console.log(newArray); // orginal array changed