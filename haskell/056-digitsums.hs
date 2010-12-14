-- Problem 56

import Data.Char (digitToInt)

answer = maximum [ sum $ map digitToInt $ show (a^b) |
                   a <- [1..100], b <- [1..100] ]
main = print (answer)