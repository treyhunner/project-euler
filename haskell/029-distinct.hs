-- Problem 29

import Data.List

answer = length $ nub [ a^b | a <- [2..100], b <- [2..100]]