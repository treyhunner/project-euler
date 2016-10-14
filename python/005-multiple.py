"""Smallest multiple evenly divisible by the numbers 1 to 20."""
from fractions import gcd
from functools import reduce


def lcm(a, b): return (a * b) // gcd(a, b)

answer = reduce(lcm, range(1, 21))

print(answer)
