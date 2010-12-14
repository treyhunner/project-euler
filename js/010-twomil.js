// Problem 10

load("primality.js");

function sumPrimesUpTo(n) {
    var sum = 2;
    // Total accuracy = 0.95
    var isPrime = primeChecker(Math.pow(0.95,1/n))
    for(var x = 3; x < 2000000; x++) {
        if (isPrime(x)) {
            sum += x;
        }
    }
    return sum;
}

print(sumPrimesUpTo(2000000));
