-- Problem 9

pytrips max = [ (a,b,floor(c)) | a <- [1..(div max 2)], b <- [a..(div max 2)], let c2 = fromIntegral(a^2+b^2), let c = sqrt(c2), c2 == fromIntegral(floor(c)^2) ]

answer = [ a*b*c | (a,b,c) <- pytrips 1000, a+b+c == 1000 ] !! 0
