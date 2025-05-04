import datetime

print(datetime.datetime.now())

print("Hello World!")
# print(2 + 2)

result = 2 + 2

# print("Hello again! The resule of the addition calculation is", 2 + 2)
# print("Hello again!" + " The resule of the addition calculation is", result)

# this is a comment

# userInput = input('Enter your name:')
# print(userInput)


x, y = "val1", "val2"
# print(x,y)


# format_string:
# % operator
# format()

msg = "The price of %s laptop is %d USD and the exchange rate is %4.2f to 1 EUR" % (
    "Apple",
    1299,
    1.232524334,
)
# print(msg)

msg = "The price of {} laptop is {} USD and the exchange rate is {} to 1 EUR".format(
    "Apple", 1299, 1.232524334
)
# print(msg)


# first_name = input('What is your first name? ').title()
# last_name = input (f'Got you {first_name}, so what is your last name? ').title()
# age = input('Please confirm your age: ')
# gift = 'box of chocolates'
# msg = f'Welcome {first_name} {last_name}, \n we have a gift for you at the front desk! \n It is a {gift}.'
# print(msg)


# Elian's code
# first_name= input('What is your first name: ').title()
# last_name= input(f'Hello {first_name}, what is your last name: ').title()
# age= input(f'Nice to meet you {first_name} {last_name}, how old are you: ')
# fav_food= input(f'Great! what is your favorite food: ')
# msg = (f'Hello {first_name} {last_name}! You are {age} years old! And your favorite food is {fav_food}, There is also a gift waiting for you {first_name} :)')
# print(msg)

# print(str(2))
# print(float("2"))
# print(int("2"))

# Lists
userBirthYear = [1990, 1992, 1980, 1968, 1989, 1996, "random"]
print(userBirthYear)
# print(userBirthYear[0])
# print(userBirthYear[-1])
userBirthYear.append("2001")
# print(userBirthYear)
del userBirthYear[-1]
# print(userBirthYear)
# print(len(userBirthYear))

months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
print(months[-1])
print(userBirthYear[1:-2])
print(userBirthYear[0:-1:2])


# dictionary
stu1 = {"first_name": "John", "last_name": "Smith"}
# print(stu1)
# print(stu1["first_name"])  # bracket notation
# print(stu1["first" + "_" + "name"])
# print(stu1["first_name"] + " " + stu1["last_name"])

# userInputNum = input("Enter a number between 1 and 10: ")
# if userInputNum == "8":
#     print("You got it right!")
#     print("Good guess!")
# else:
#     print("Wrong number!")

num1 = 12
num2 = 0
try:
    print(num1 / num2)
except ZeroDivisionError:
    print("Error")
except ImportError:
    print("Import error...")

# IOError
# IndexError
# KeyError
# TypeError
# NameError

# how to write simple control flow statement 