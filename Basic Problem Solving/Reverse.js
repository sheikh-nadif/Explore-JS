function reverse (n){ // Reverse a string
    let reverse = "";
    for (i=0; i<n.length; i++){
        reverse = n[i] + reverse;
    }
    return reverse;
}

console.log(reverse("Hello human people."),"\n");
console.log(reverse("? esaelp yssup a evah I nac ,ssoB eyA"),"\n");