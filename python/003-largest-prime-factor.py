def largest_prime_factor(number):
    n = 2
    while n < number:
        if number % n == 0:
            number //= n
        n += 1
    return number


answer = largest_prime_factor(600851475143)
print(answer)
