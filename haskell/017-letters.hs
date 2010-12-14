-- Problem 17

toLetters n =
    let twoDigLetters n =
            if n < 20 && n > 9
                then teenLetters n
                else if n == 0
                    then "zero"
                    else let tens = case (div n 10) of
                        {0 -> "";
                        2 -> "twenty";
                        3 -> "thirty";
                        4 -> "forty";
                        5 -> "fifty";
                        6 -> "sixty";
                        7 -> "seventy";
                        8 -> "eighty";
                        9 -> "ninety"}
                        in tens ++ (digLetters (mod n 10))
    in if n < 100
        then twoDigLetters n
        else if n >= 1000
            then let tl = (toLetters (div n 1000))
                in if (mod n 1000) == 0
                    then tl ++ "thousand"
                    else tl ++ "thousand" ++ toLetters (mod n 1000)
            else let hl = (digLetters (div n 100))
                in if (mod n 100) == 0
                    then hl ++ "hundred"
                    else hl ++ "hundredand" ++ (toLetters (mod n 100))
    where
        teenLetters 10 = "ten"
        teenLetters 11 = "eleven"
        teenLetters 12 = "twelve"
        teenLetters 13 = "thirteen"
        teenLetters 14 = "fourteen"
        teenLetters 15 = "fifteen"
        teenLetters 16 = "sixteen"
        teenLetters 17 = "seventeen"
        teenLetters 18 = "eighteen"
        teenLetters 19 = "nineteen"
        digLetters 0 = ""
        digLetters 1 = "one"
        digLetters 2 = "two"
        digLetters 3 = "three"
        digLetters 4 = "four"
        digLetters 5 = "five"
        digLetters 6 = "six"
        digLetters 7 = "seven"
        digLetters 8 = "eight"
        digLetters 9 = "nine"


lettersUsed n = length (toLetters n)

answer = sum (map lettersUsed [1..1000])
