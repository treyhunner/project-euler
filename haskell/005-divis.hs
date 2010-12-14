-- Problem 5

lcm_list a = lcm_acc (head a) (tail a)
    where
        lcm_acc h t
            | t == [] = h
            | otherwise = lcm_acc (h `lcm` (head t)) (tail t)

answer = lcm_list [1..20]
