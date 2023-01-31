// In mathematics, the Fibonacci numbers, commonly denoted Fn , 
// form a sequence, the Fibonacci sequence, 
// in which each number is the sum of the two preceding ones. 
// The sequence commonly starts from 0 and 1,

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.......

// var fibo[0] = 0
// var fibo[1] = 1
// fibo[2] = fibo[2-1] + fibo [2-2]
// fibo[3] = fibo[3-1] + fibo [3-2]
// fibo[4] = fibo[4-1] + fibo [4-2]
// .
// .
// .
// fibo[n] = fibo[n-1] + fibo [n-2]

function Fibonacci(n){
    var fibo = [0 , 1];
    console.log("Digit no 0 is: 0");
    console.log("Digit no 1 is: 1");
    for (var i = 2; i <= n; i++ ){
        fibo[i] = fibo[i-1] + fibo[i-2];
        console.log(`Digit no ${i} is: ${fibo[i - 2]} + ${fibo[i - 1]} → ${fibo[i]}`);
           // same as: fibo[i-2] +" + "+ fibo[i-1] +" → "+ fibo[i]
    }      
    return 'Fibonacci Series upto '+n+'th position is: '+fibo;
}

console.log(Fibonacci(9));