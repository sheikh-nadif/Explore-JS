// Brick Calculator : 1 input (story of a building), 
// 1-10S 15ft, 11-20S 12ft, 20S+ 10ft
// Per feet = 1000 Brick
// Recursive Approach

function brickCalculator (input){
    let totalBrick = 0;
    if (input <= 0){
        return "Invalid Input: Must be a number and greater than 0";
    }
    else{
        if (input > 21){
            console.log("-→ Input is ", input);
            totalBrick = (input-20) *10 *1000;
            input = input-(input-20);
            console.log("→ Total Brick", totalBrick, " Input Now", input);
            return totalBrick + brickCalculator(input);
        }
        else if (input > 10 && input < 21){
            console.log("-→ Input is ", input);
            totalBrick = (input-10) *12 *1000;
            input = input-(input-10);
            console.log("→ Total Brick", totalBrick, " Input Now", input);
            return totalBrick + brickCalculator(input);
        }
        else if (input < 11 ){
            console.log("-→ Input is ", input);
            totalBrick = input *15 *1000;
            input = 0;
            console.log("→ Total Brick", totalBrick, " Input Now", input);
            return totalBrick;
        }
    }
}

console.log(brickCalculator(30),'\n');
console.log(brickCalculator(25),'\n');
console.log(brickCalculator(12),'\n');
console.log(brickCalculator(0),'\n');
console.log(brickCalculator(7),'\n');