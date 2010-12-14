-- Problem 22
import Names
import Char
import Data.List

alphaVal wrd = sum $ map charScore wrd
    where
      charScore chr = ord chr - ord 'A' + 1

answer = sum $ zipWith (*) sortedNameValues multipliers
    where
      sortedNameValues = map alphaVal $ sort names
      multipliers = [1..length sortedNameValues]
