-- Problem 36

isDecimalPal x = (show x) == (reverse (show x))
isBinaryPal x = let p = (toRevBin x) in p == (reverse p)
                where
                  toRevBin 0 = []
                  toRevBin x = let (q,r) = quotRem x 2 in [r] ++ toRevBin q

answer = sum [ x | x <- [1..999999], isDecimalPal x, isBinaryPal x]