# 'Hello %s %s, your age is %d, you can %s apply for driver license'%(first_name, last_name, 2025-birthYear, result)

# 'Hello {} {}, your age is %d, you can {} apply for driver license'.format(first_name, last_name, 2025-birthYear, result)

# userInput = input("Enter a number")

# if userInput == 10:
#     print("Congrats! You win")
# else:
#     print("Sorry! You lost the game")

# try:

# except TypeError:
#     print()

# except IndexError:

# except ZeroDivisionError:


# * Loops
pets = ["Rabbit", "Dog", "Cat", "Fish", "Hamster"]

# for i in pets:
#     print(i)

# for i, j in enumerate(pets):  # to show the index of each element
#     print(i, j)

stu1 = {"first_name": "John", "last_name": "Doe", "birth_year": 1990}

# for i in stu1:
#     print(i, stu1[i])


# for i in range(1, 10, 2):  # counts the range
#     print(i)


# & Practice 1
# 2 --> 100
# 106
# skip one time
# show msg: the current number is...

# & Practice 2
# 1, 2, 3, 4, ... 10
# output: 55

num = 100
while num < 111:
    num += 2
    if num == 106:
        continue
    print(f"The current number is: {num}")
    if num == 110:
        break

# print(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

count = 1
number = 0

while count < 11:
    number += count
    count += 1
    print(f"count: {count} number: {number}")

# sum = 0
# for i in range(10):
#     sum += sum + 1
#     print(sum)


def addNum(num):
    sum = 100
    for i in range(num):
        sum += 1
    print("function result:", sum)


addNum(10)


def someFunction(a, b, c=100, d="Hello"):
    print(a, b, c, d)


someFunction("first", "second")


def addNum2(*num):
    sum = 0
    for i in num:
        sum += i
    print(sum)


addNum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
addNum2(1, 10, 13)


def show_info(**num):
    for i, j in num.items():
        print("The student's %s is %s" % (i, j))


show_info(
    first_name="Peter", last_name="Smith", birthYear=1990, email="peter@gmail.com"
)


# & Practice: create a function that can calculate average score.
# & Pass in values such as 100, 99, 90

# def showStuInfo(schoolName, *lastName, **firstNameEmail ):
