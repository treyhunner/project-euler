-- Problem 6

sumOfSquares n = sum [ x^2 | x <- [1..n] ]
squareOfSums n = (sum [1..n])^2
difference = [ (squareOfSums x) - (sumOfSquares x) | x <- [0..] ]
answer = difference !! 100

sumOfSquares' n = n*(n+1)*(2*n+1) `div` 6
squareOfSums' n = (n*(n+1) `div` 2)^2
difference' = [ (squareOfSums' x) - (sumOfSquares' x) | x <- [0..] ]
answer' = difference' !! 100

