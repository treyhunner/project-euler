-- Problem 16

import Data.Char

answer = sum (map digitToInt (show (2^1000)))

-- The manual way
sumDigits num = digitAcc num 0
    where
        digitAcc n sum =
            if n == 0
                then sum
                else digitAcc (div n 10) (sum + (mod n 10))
answer' = sumDigits (2^1000)
