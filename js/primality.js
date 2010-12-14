Math.powmod = powmod = function(base, exp, mod) {
    var result = 1;
    for (var i = 0; i < 31; i++) {
        if ((exp & 1) != 0) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp/2);
        base = Math.pow(base,2) % mod;
    }
    return result;
};
function primeChecker(accuracy) {
    var miller_rabin = function(n,m,k,times) {
        if (times <= 0) { return true; }
        var a = 2 + Math.floor(Math.random()*(n-3));
        var b_0 = Math.powmod(a,m,n);
        var btime = function(b,j) {
            if (j === k) { return false; }
            if (((b+1) % n) === 0 || (j === 0 && ((b-1) % n) === 0)) {
                return true;
            }
            else if (j !== 0 && ((b-1) % n) === 0) {
                return false;
            }
            return btime(Math.powmod(b,2,n), j+1);
        };
        if (btime(b_0,0)) {
            return miller_rabin(n,m,k,times-1);
        }
        return false;
    };

    var t = -1*Math.log(1-accuracy)/Math.log(4); // fail rate of 4^-t
    return function(n) {
        if(n === 2) { return true; }
        if(n <= 1 || n % 2 === 0) { return false; }
        var m,k;
        for(k = 0, m = n-1; m % 2 == 0; k++) {
            m = m / 2;
        }
        return miller_rabin(n,m,k,t/k);
    };
}

function primesUpTo(max) {
    var primes = new Array();
    var isPrime = primeChecker(Math.pow(0.95,1/max));
    for (var i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
