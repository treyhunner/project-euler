// Problem 28

function spiralDiagSum(size) {
    if (size % 2 === 0) { return undefined; }
    var max = 1;
    for (var i = 1, step = 2; step < size; step += 2) {
        for (var j = 0; j < 4; j++) {
            i += step;
            max += i;
        }
    }

    return max;
}

print(spiralDiagSum(1001));
