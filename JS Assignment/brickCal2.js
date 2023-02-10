// Brick Calculator : 1 input (story of a building), 
// 1-10S 15ft, 11-20S 12ft, 20S+ 10ft
// Per feet = 1000 Brick
// Conditional Approach

function brickCalculator (n){
    let totalBrick = 0;

    if (n <= 0){
        return "Invalid Input, must be grater than 0";
    }
    else if (n <= 10){
        totalBrick = n*15*1000;
        return totalBrick;
    }
    else if (n <= 20){
        let fist10 = 10*15*1000;
        let second10 = (n-10)*12*1000;
        totalBrick = fist10 + second10;
        return totalBrick;
    }
    else{
        let fist10 = 10*15*1000;
        let second10 = 10*12*1000;
        let third10 = (n-20)*10*1000;
        totalBrick = fist10 + second10 +third10;
        return totalBrick;
    }
}

console.log(brickCalculator(10),"\n");
console.log(brickCalculator(20),"\n");
console.log(brickCalculator(30),"\n");
console.log(brickCalculator(0),"\n");
console.log(brickCalculator(-30),"\n");