from functools import lru_cache


@lru_cache(None)
def sum_of_divisors(number):
    return sum(
        n
        for n in range(1, number)
        if number % n == 0
    )


amicable_numbers = (
    n 
    for n in range(1, 10_000)
    if sum_of_divisors(n) != n
    and sum_of_divisors(sum_of_divisors(n)) == n
)

answer = sum(amicable_numbers)
print(answer)
