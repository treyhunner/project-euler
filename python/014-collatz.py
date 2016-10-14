"""Print number under 1,000,000 with the longest Collatz sequence."""
from functools import lru_cache


def is_even(n):
    """Return True if given number is even."""
    return n % 2 == 0


def next_collatz(n):
    """Return next Collatz number in sequence."""
    return n // 2 if is_even(n) else 3*n + 1


@lru_cache(None)
def collatz_length(n):
    """Return length of Collatz sequence for given number."""
    if n == 1:
        return 1
    else:
        return collatz_length(next_collatz(n)) + 1


answer = max(range(1, 1000000), key=collatz_length)
print(answer)
