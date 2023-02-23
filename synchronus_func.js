function sync_function (input1, input2, func){ //using argument to pass other functions
    let output = `Hello ${input1} of ${input2} years old please, ${func()}.`;
    return output;
}

function eat(){
    let out_eat = "Eat a banana";
    return out_eat;
}

function wash(){
    let out_wash = "Wash your hand";
    return out_wash;
}

function read(){
    let out_read = "Read a book";
    return out_read;
}


console.log(sync_function("Sabbir", 25, eat));
console.log(sync_function("Salam", 22, read));
console.log(sync_function("Puchki", 5, wash));