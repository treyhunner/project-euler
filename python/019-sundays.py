# Problem 19

# I should have used some Python built-in libraries

sundays = 0
cday = 2 # 2 for Tuesday (1901-01-01)
mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for i in range(1901,2001):
    for x in range(len(mdays)):
        if cday % 7 == 0:
            sundays += 1
        cday += mdays[x]
        if x == 1 and i % 4 == 0:
            cday += 1
answer = sundays
print answer
