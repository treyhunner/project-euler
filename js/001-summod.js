// Problem 1

load("functions.js");

function sumMultsTo(max) {
    var sumUpTo = function (N) {
        return (N + 1) * N / 2;
    };
    return function (x) {
        return x * sumUpTo(Math.floor((max - 1) / x));
    };
}

function sumAnyMultsTo1000() {
    var sumMultsTo1000 = sumMultsTo(1000);
    return bayesUnion(arguments,sumMultsTo1000);
}

print(sumAnyMultsTo1000(5, 3));
