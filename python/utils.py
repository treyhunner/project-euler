from bisect import bisect_left
from collections import defaultdict
from itertools import count, takewhile
from math import floor, sqrt


def binary_search(sequence, item):
    position = bisect_left(sequence, item, 0, len(sequence))
    return (position < len(sequence) and sequence[position] == item)


class CachedIterable:

    """Wraps and iterable and caches it."""

    def __init__(self, iterable):
        self.iterator = iter(iterable)
        self.data = []

    def __iter__(self):
        for n in count():
            while len(self.data) <= n:
                self.data.append(next(self.iterator))
            yield self.data[n]


class CachedSortedIterable(CachedIterable):

    """Wraps and caches sorted iterables."""

    def up_to(self, value):
        def less_than_or_equal(n): return n <= value
        return takewhile(less_than_or_equal, self)

    def __contains__(self, n):
        while not self.data or self.data[-1] < n:
            self.data.append(next(self.iterator))
        return binary_search(self.data, n)


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
