function inchToFeet(name, inch){
    var feet = parseFloat(inch/12).toFixed(2); //toFixed for 2 decimal place in float
    var output = name +" has a height of "+ inch +" inch or "+ feet +" feet \n";

    return output;
}

console.log(inchToFeet("Abul", 159));
console.log(inchToFeet("Salam", 169));


//Using loop, array and function for multiple value
var nameArray = ["Nasir", 'Mahadi', 'Naem', 'Polok'];
var heightArray = [128, 258, 136, 145];

for (var i = 0; i < nameArray.length; i++){
    console.log(inchToFeet(nameArray[i], heightArray[i]));
}
