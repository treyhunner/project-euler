// Problem 15
function numOfPaths(x,y) {
    var theGrid = new Array(x+1);
    for (var i = 0; i < x+1; i++) {
        theGrid[i] = new Array(y+1);
    }

    var findPaths = function(x,y) {
        if (x < 0 || y < 0) {
            return 0;
        }
        else if (x == 0 || y == 0) {
            theGrid[x][y] = 1;
            theGrid[y][x] = 1;
        }
        else if (theGrid[x][y] === undefined) {
            theGrid[x][y] = findPaths(x-1,y) + findPaths(x,y-1);
            theGrid[y][x] = theGrid[x][y];
        }
        return theGrid[x][y];
    }

    return findPaths(x,y);
}

print(numOfPaths(20,20));
