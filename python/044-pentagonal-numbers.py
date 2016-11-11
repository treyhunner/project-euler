from utils import CachedSortedIterable
from itertools import count


def pentagonal():
    return (
        n * (3*n - 1) // 2
        for n in count(1)
    )


pentagonal_numbers = CachedSortedIterable(pentagonal())

answer = next(
    n - m
    for n in pentagonal_numbers
    for m in pentagonal_numbers.up_to(n)
    if n - m in pentagonal_numbers
    and n + m in pentagonal_numbers
)

print(answer)
