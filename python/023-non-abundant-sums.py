from utils import divisors_up_to


divisors_by_number = divisors_up_to(28123)


abundant_numbers = {
    n
    for n, divisors in divisors_by_number.items()
    if sum(divisors) > n
}


def is_sum_of_abundant_numbers(n):
    return any(
        (n-m) in abundant_numbers
        for m in abundant_numbers
    )


non_abundant_sums = (
    n
    for n in divisors_by_number
    if not is_sum_of_abundant_numbers(n)
)


answer = sum(non_abundant_sums)


print(answer)
