-- Problem 31

import Data.List

numOfWays coins max = accu 0 (reverse (sort coins))
                      where
                        accu sum []
                            | sum == max = 1
                            | otherwise = 0
                        accu sum [1]
                            | sum <= max = 1
                            | otherwise = 0
                        accu sum coins
                            | sum > max = 0
                            | sum == max = 1
                            | otherwise = accu (sum+(coins !! 0)) coins +
                                          accu sum (tail coins)

answer = numOfWays [1, 2, 5, 10, 20, 50, 100, 200] 200

main = print (answer)