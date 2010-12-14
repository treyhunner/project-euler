-- Problem 20

import Data.Char

factorial n = factacc n 1 
    where
        factacc n m = case n of 
            1 -> m 
            _ -> factacc (n-1) (m*n)

answer = sum (map digitToInt (show (factorial 100)))
