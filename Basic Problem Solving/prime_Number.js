// A prime number is is only divisible by 1 and itself
// Example: 1, 2, 5, 7 .....
function primeNumber (n){
    if (n == 0){
        return n + " is not a prime no."
    }
    else{
        if(n > 2){
            for (i = 2; i < n -1; i++){
                console.log(`${n} % ${i} → ${n%i}`);
                if (n % i == 0){
                    return n+ " is not a prime no";
                }
            }
        }  
    }

    return n+ " is a prime no.";
}

console.log(primeNumber(77)+"\n");
console.log(primeNumber(7)+"\n");
console.log(primeNumber(1)+"\n");
console.log(primeNumber(2)+"\n");
console.log(primeNumber(18)+"\n"); 
console.log(primeNumber(0)+"\n"); 
console.log(primeNumber(69)+"\n"); 
console.log(primeNumber(127)+"\n"); 