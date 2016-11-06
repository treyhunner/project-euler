from utils import primes_up_to


def truncate_number(number):
    digits = str(number)
    for i in range(1, len(digits)):
        yield int(digits[i:])
        yield int(digits[:i])


primes = primes_up_to(1000000)
truncatable_primes = (
    prime
    for prime in primes
    if prime > 10 and all(n in primes for n in truncate_number(prime))
)

answer = sum(truncatable_primes)
print(answer)
