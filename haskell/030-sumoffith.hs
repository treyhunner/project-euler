-- Problem 30

import Data.Char

answer = sum [ x | x <- [10..350000], sum(map (\a -> (digitToInt a)^5) (show x)) == x]