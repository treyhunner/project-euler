"""Print difference between sum of squares and square of sums of 1 to 100."""


def difference_between_sums(numbers):
    sum_of_squares = sum(n**2 for n in numbers)
    square_of_sum = sum(numbers)**2
    return square_of_sum - sum_of_squares


answer = difference_between_sums(range(1, 101))

print(answer)
