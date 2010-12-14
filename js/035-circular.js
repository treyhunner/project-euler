// Problem 35
load("primality.js");

function circPrimesUpTo(max) {
    var primes = new Array();
    var isPrime = primeChecker(Math.pow(0.9,1/max));
    primes.push(2);
    for (var n = 3; n < max; n+=2) {
        var s = n.toString();
        if (s.indexOf(2) < 0 && s.indexOf(2) < 0 && s.indexOf(4) < 0
            && s.indexOf(6) < 0 && s.indexOf(8) < 0 && isPrime(n))
            primes.push(s);

    }
    var circPrimes = new Array();
    var rotations = function(str) {
        var arr = new Array();
        for(var x = 0; x < str.length; x++) {
            arr.push(str.substring(x)+str.substring(0,x));
        }
        return arr;
    }

    for(var i = 0; i < primes.length; i++) {
        var rots = rotations(primes[i]);
        var j;
        for(j = 0; j < rots.length; j++) {
            if(primes.indexOf(rots[j]) < 0) {
                break;
            }
        }
        if (j === rots.length) {
            circPrimes.push(primes[i]);
        }
    }
    return circPrimes;
}

answer = circPrimesUpTo(1000000).length;
print(answer);
