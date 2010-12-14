-- Problem 38

import Data.List

ninesum x = st 1 [] where st n str = if length str >= 9
                                     then if isPandigital str then str else []
                                     else if isPandigital str
                                          then st (n+1) (str++(show (x*n)))
                                          else []
isPandigital s = nub s == s && length s <= 9 && not (elem '0' s)
answer = maximum [ read s::Int  | x <- [1..9999], s <- [ninesum x], length s == 9 ]

main = print (answer)