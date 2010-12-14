// Problem 27

load("primality.js");
var max = 1;
var a_max,b_max;
var isPrime = primeChecker(Math.pow(0.7,1/80));
for (var a = -999; a < 1000; a++) {
    for (var b = -999; b < 1000; b++) {
        for(var n = 0; isPrime(Math.pow(n,2)+ a*n + b); n++) { ; }
        if(n > max) {
            max = n;
            a_max = a;
            b_max = b;
        }
    }
}

answer = a_max*b_max;
print(answer);
