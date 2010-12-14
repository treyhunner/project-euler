-- Problem 4

pal_products dig = [ x*y | x <- [10^(dig-1)..10^dig], y <- [10^(dig-1)..10^dig], palindrome (x*y) ]

palindrome n = ((toList n) == (reverse (toList n)))
    where
        toList n
            | n < 10 = [n]
            | otherwise = (toList (n `div` 10)) ++ [n `mod` 10]


answer = maximum (pal_products 3)
