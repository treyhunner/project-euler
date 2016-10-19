from functools import partial, reduce
import operator


product = partial(reduce, operator.mul)


def factorial(n):
    return product(range(1, n+1))


answer = sum(
    int(digit)
    for digit in str(factorial(100))
)
print(answer)
