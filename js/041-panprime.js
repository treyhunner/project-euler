// Problem 41

load("functions.js");
load("primality.js");

function pandigitalPrimes(n) {
    if (n < 1 || n > 9) {
    return -1;
    }
    var isPrime = primeChecker(0.999);
    var pandigitals = new Array();
    var accum = function(str,arr) {
    var len = arr.length;
    if (len === 0) {
        var i = parseInt(str);
        if (isPrime(i)) {
        pandigitals.push(parseInt(str));
        }
    }
    for (var i = 0; i < len; i++) {
        accum(str+arr[i],arr.removed(i));
    }
    };
    var sarr = new Array(n);
    for (var i = 0; i < n; i++) {
    sarr[i] = i+1;
    }
    accum("",sarr);
    return pandigitals;
}

function largestPanPrime() {
    // EDIT: 8 and 9 digit pandigitals are divisible by 9
    // because 1+2+3+4+5+6+7+8 = 36 and 36+9 = 45 (36 == 45 == 0 (mod 9))
    for (var i = 7; i > 0; i--) {
    var m = pandigitalPrimes(i).max();
    if (m !== undefined) {
        return m;
    }
    }
    return -1;
}

print(largestPanPrime());

