-- Problem 34
import Data.List
import Char

factorial n = if n == 0 then 1 else n * factorial (n - 1)
digitFactFilter num = num == (sum $ map (factorial . digitToInt) $ show num)

answer = sum $ filter digitFactFilter [3..100000]
