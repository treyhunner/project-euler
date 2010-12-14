// Problem 2

function fib(n) {
    var fi = (1 + Math.sqrt(5)) / 2;
    return (Math.pow(fi, n) - Math.pow(-1 / fi, n)) / Math.sqrt(5);
}
function sumFibsLessThan(n) {
    var sum = 0;
    for (var x = 1; fib(x) < n; x++) {
        var nth = Math.round(fib(x));
        if (nth % 2 === 0) {
            sum += nth;
        }
    }
    return sum;
}

print(sumFibsLessThan(4000000));
