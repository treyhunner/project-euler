// Problem 14

function longestChain(max) {
    var seen = new Array();

    var chainLen = function(n) {
        if (n === 1) {
            return 1;
        }
        if (seen[n] === undefined) {
            if (n % 2 == 0)
                seen[n] = 1 + arguments.callee(n/2);
            else
                seen[n] = 1 + arguments.callee(3*n+1);
        }
        return seen[n];
    }

    var longest = 0;
    for (var i = 1; i < max; i++) {
        longest = Math.max(chainLen(i),longest);
    }
    for(var i = 1; i < max; i++) {
        if(seen[i] === longest)
            return i;
    }
    return -1;
}

var answer = longestChain(1000000);
print(answer);
