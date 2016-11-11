from itertools import count, takewhile
import re
from string import ascii_uppercase


LETTERS = {
    letter: index
    for index, letter in enumerate(ascii_uppercase, start=1)
}


def triangle_numbers_up_to(max_value):
    def less_than_max_value(n): return n <= max_value
    triangle_numbers = (
        (n * (n + 1)) // 2
        for n in count()
    )
    return takewhile(less_than_max_value, triangle_numbers)


with open('p042_words.txt') as words_file:
    words = re.findall(r'"(\w+)",?', words_file.read())

word_values = {
    word: sum(LETTERS[x] for x in word)
    for word in words
}

triangle_numbers = list(triangle_numbers_up_to(max(word_values.values())))

answer = len([
    word
    for word, value in word_values.items()
    if value in triangle_numbers
])

print(answer)
