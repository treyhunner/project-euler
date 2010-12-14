-- Problem 33

import Data.Ratio

isCurious :: Integral t => (t, t) -> Bool
isCurious (a,b)
          | a >= 100 || b >= 100 = False
          | a >= b = False
          | a < 10 || b < 10 = False
          | mod a 10 == 0 || mod b 10 == 0 = False
          | otherwise =
              let (n1,n2) = quotRem a 10
                  (d1,d2) = quotRem b 10
                  r = a%b
              in r == n1%d1 && n2 == d2 ||
                 r == n1%d2 && n2 == d1 ||
                 r == n2%d1 && n1 == d2 ||
                 r == n2%d2 && n1 == d1

answer = denominator $ product [ x%y | x <- [1..99], y <- [1..99],
                                            isCurious (x,y)]

main = print (answer)