-- Problem 32

import Data.List

possible = [ (a,b) | a <- [1..9], b <- [1000..9999] ] ++
           [ (a,b) | a <- [10..99], b <- [100..999] ]
answer = sum $ nub [ x*y | (x,y) <- possible, 
                           str <- [(show x)++(show y)++(show (x*y))],
                           nub str == str, not (elem '0' str), length str == 9 ]