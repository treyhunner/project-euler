"""Print the sum of even Fibonacci numbers under 4,000,000."""
from itertools import takewhile


def fibonacci_sequence():
    a, b = 0, 1
    while True:
        yield b
        a, b = b, a+b


def under_4_million(n): return n < 4_000_000


even_fibonacci = (
    n
    for n in fibonacci_sequence()
    if n % 2 == 0
)

even_fib_under_4mill = takewhile(under_4_million, even_fibonacci)

answer = sum(even_fib_under_4mill)

print(answer)
