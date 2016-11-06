from utils import divisors_up_to, window


def are_consecutive(*nums):
    return nums == tuple(range(nums[0], nums[-1]+1))


divisors_by_number = divisors_up_to(1_000_000)


numbers_and_prime_factors = {
    n: [f for f in factors if divisors_by_number[f] == [1]]
    for n, factors in divisors_by_number.items()
}


numbers_with_four_prime_factors = (
    n
    for n, prime_factors in sorted(numbers_and_prime_factors.items())
    if len(prime_factors) == 4
)


answer = next(
    a
    for a, b, c, d in window(numbers_with_four_prime_factors, 4)
    if are_consecutive(a, b, c, d)
)

print(answer)
