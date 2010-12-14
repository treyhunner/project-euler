// Problem 3

function isPrime(n) {
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeDivisor(n) {
    var i;
    for (i = Math.floor(Math.sqrt(n)); n % i !== 0 || !isPrime(i); i--) {
    }
    return i;
}

print(largestPrimeDivisor(600851475143));
