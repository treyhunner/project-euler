-- Problem 48

answer = lastTen $ sum [ lastTen $ selfPow x | x <- [1..1000]]
         where
           lastTen x = x `mod` (10^10)
           selfPow x = x^x