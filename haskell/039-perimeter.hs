-- Problem 39

-- This is too slow!

import Data.Array

valid  = [ (a,b,c) | a <- [1..999], b <- [1..999],
           let c2 = a^2+b^2, let c = floor(sqrt(fromIntegral(c2))),
           c2 == c^2, a+b+c <= 1000 ]
counts = [ length plst | p <- [1..1000],
           let plst = [ (a,b,c) | (a,b,c) <- valid, a+b+c == p] ]
answer = 1 + (length $ takeWhile (\x -> x /= maximum counts) counts)

main = print (answer)