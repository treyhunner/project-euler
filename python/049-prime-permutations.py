from itertools import chain, combinations, permutations
from utils import primes_up_to


primes = primes_up_to(9999)


def digit_permutations(integer):
    digits = str(integer)
    return {
        int(''.join(permutation))
        for permutation in permutations(digits)
        if '0' not in permutation
    }


def equally_separated(items):
    sequence = sorted(items)
    differences = {
        y - x
        for x, y in zip(sequence, sequence[1:])
    }
    return len(differences) == 1


prime_permutations = (
    digit_permutations(n) & primes
    for n in primes
)


three_digit_permutations = chain.from_iterable(
    combinations(numbers, 3)
    for numbers in prime_permutations
)


matching_sequences = {
    tuple(sorted(sequence))
    for sequence in three_digit_permutations
    if equally_separated(sequence)
}

matching_sequences.remove((1487, 4817, 8147))
assert len(matching_sequences) == 1
answer = ''.join(
    str(n)
    for n in matching_sequences.pop()
)

print(answer)
