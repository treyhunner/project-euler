-- Problem 7

-- This should be cleaned up

divis n m = n `mod` m == 0

prime n = nth_prime [2,3] 4 (n-2)
    where nth_prime lst x n = if (any (divis x) lst) then nth_prime lst (x+1) n else (if (n <= 1) then lst++[x] else nth_prime (lst++[x]) (x+1) (n-1))

answer = prime 10001 !! 10000
