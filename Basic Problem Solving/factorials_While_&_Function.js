// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial: For example, The value of 0! is 1, according to the convention for an empty product.
// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// n! = n * (n-1)! , where n is non-negative integer.


function factorial(n){
    let i = 1;
    let factorial = 1;
    while (i <= n){
        factorial = factorial * i;
        console.log(i, factorial);
        i++;
    }
    return "Factorial of " +n+ " is: "+factorial +"\n";
}
console.log(factorial(5));
console.log(factorial(8));
