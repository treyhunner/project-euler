-- Problem 40

import Data.Char (digitToInt)

nthDig n = if n < 10 then n else digitToInt (findDig n 9)
    where findDig count add =
              let nextAdd = add*10
                  digs = length (show add)
              in
                if add*digs < count
                then findDig (count-(add*digs)) nextAdd
                else let (d,m) = divMod count digs
                     in
                       if m == 0
                       then last (show ((10^(digs-1))+d-1))
                       else (show ((10^(digs-1))+d)) !! (m-1)

answer = product (map nthDig [1,10,100,1000,10000,100000,1000000])

-- Slower method
showLst [] = ""
showLst lst = (show (head lst))++(showLst (tail lst))
tL = map digitToInt (showLst [1..])

answer' = (tL!!0) * (tL!!9) * (tL!!99) * (tL!!999) * (tL!!9999) * (tL!!99999) * (tL!!999999)