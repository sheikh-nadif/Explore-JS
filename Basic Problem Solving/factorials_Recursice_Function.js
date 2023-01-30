// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial: For example, The value of 0! is 1, according to the convention for an empty product.
// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// n! = n * (n-1)! , where n is non-negative integer.


function reccursiveFactorial (n){
    if (n >= 0){ // to make sure input is non-neg integer
        if (n == 0){ // recursion breaking condition
            return 1;
        }
        else{ //recursion
            return n * reccursiveFactorial(n-1);
        }
    }
    else{
        console.log("Input must be non-negative integer.")
    }
}



var input = 5;
console.log("Factorial of "+input+" is: "+reccursiveFactorial(input)+"\n");

var input = -5;
console.log("Factorial of "+input+" is: "+reccursiveFactorial(input)+"\n");

var input = 9;
console.log("Factorial of "+input+" is: "+reccursiveFactorial(input)+"\n");