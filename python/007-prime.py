"""Print the 10,001st prime number."""
from itertools import count, islice
from math import sqrt


def is_prime(p):
    possible_divisors = range(2, int(sqrt(p)+1))
    return all(
        p % n != 0
        for n in possible_divisors
    ) and p not in [0, 1]


primes = (
    number
    for number in count()
    if is_prime(number)
)

answer = next(islice(primes, 10_000, 10_001))

print(answer)
