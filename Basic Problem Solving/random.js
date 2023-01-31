function dice (){ // will generate a random digit in between 1 to 6
    let dice = Math.round(Math.random() * 6);
    if (dice == 0){
        return dice = 1;
    }
    return dice;
}

console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());

