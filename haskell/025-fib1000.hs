-- Problem 25
fibDig max = fib 2 1 1
    where
        fib t n m =
            if (length (show m) ) >= max
                then t
                else fib (t+1) m (n+m)

answer = fibDig 1000
