load("primality.js");

// For problem 41
Array.prototype.removed = function(ind) {
    return this.slice(0, ind).concat(this.slice(ind+1));
};
Array.prototype.max = function() {
    var len = this.length;
    if(len === 0) { return undefined; }
    var max = this[0];
    for (var i = 1; i < len; i++) {
    if (this[i] > max) {
        max = this[i];
    }
    }
    return max;
};

// For problem 1
function bayesUnion(args,fun) {
    var evalAndAdd = function(n, list, func) {
    return (function (n, p, mult) {
        var sum = 0;
        if (n === 0) {
            sum = func(mult);
        }
        else {
            for (var i = p; n + i <= list.length; i++) {
            sum += arguments.callee(n - 1, i + 1, mult * list[i]);
            }
        }
        return sum;
        }(n, 0, 1));
    };

    var sum = 0;
    var sign = 1;
    for (var i = 1; i <= args.length; i++) {
        sum += sign * evalAndAdd(i, args, fun);
        sign *= -1;
    }
    return sum;
}

// For problem 18 and 67
function maxPath(tree, height) {
    if (tree.length !== height*(height+1)/2) {
        return -1;
    }

    var elem = function(i,j) { return i*(i+1)/2+j; }
    var routes = new Array(tree.length);

    for (var j = height-1; j >= 0; j--) {
        routes[elem(height-1,j)] = tree[elem(height-1,j)];
    }
    for (var i = height-2; i >= 0; i--) {
        for ( var j = i; j >= 0; j--) {
            var submax = Math.max(routes[elem(i+1,j)], routes[elem(i+1,j+1)]);
            routes[elem(i,j)] = tree[elem(i,j)] + submax;
        }
    }
    return routes[0];
}
