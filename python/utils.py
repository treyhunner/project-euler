from collections import defaultdict
from math import floor, sqrt


def primes_up_to(limit):
    # Start with 0 & 1 non-prime and everything else assumed prime
    primality = [False, False] + [True] * (limit - 1)
    for n in range(2, floor(sqrt(limit))+1):
        if primality[n]:
            # All multiples of n are non-prime
            primality[n*2::n] = [False] * len(primality[n*2::n])
    return {
        n
        for n, is_prime in enumerate(primality)
        if is_prime
    }


def divisors_up_to(limit):
    divisors = defaultdict(list)
    divisors[1] = []
    for n in range(1, limit):
        for m in range(n*2, limit, n):
            divisors[m].append(n)
    return divisors


def window(iterable, n):
    items = ()
    for item in iterable:
        if len(items) < n:
            items = items + (item,)
        else:
            items = items[1:] + (item,)
            yield items
