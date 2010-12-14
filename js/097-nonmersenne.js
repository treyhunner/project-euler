// Problem 97

load("primality.js");

modulo = Math.pow(10,10);
answer = (28433 * Math.powmod(2,7830457,modulo) + 1) % modulo;
print(answer);