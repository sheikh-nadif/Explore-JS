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

function Fibonacci (n){
    if (n === 0){ // breaking condition
        return [0];
    }
    if (n === 1){ // breaking condition
        return [0,1];
    }
    else{
        let fibo = Fibonacci(n-1); // recursion, calculating nth array element
        console.log(fibo);
        fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
        return fibo;
    }
}

console.log(Fibonacci(4));
console.log(Fibonacci(0));