file = open("test.txt", "r")
line = file.read(10)
print(line)
# file.close

# userBirthYear=Array()

with open("test.txt", "r") as file:
    line = file.read()
    print("-->", line)

# while
# file.write("Hello again!")
# len() > 0

# * writing something to a new file
with open("test2.txt", "w") as file:
    file.write("Hello again!")

# * copy test.txt to test3.txt
# with open("test.txt", "r") as f1:
#     with open("test3.txt", "w") as f2:
#         for i in f1:
#             f2.write(i)


# * classes
class Staff:
    companyName = "ProgrammingLab"  # class variable

    def __init__(self, pName, pPosition, pPay, pEmail):  # instance variable
        self.full_name = pName
        self.position = pPosition
        self.pay = pPay
        self.email = pEmail
        print("creating an object")

    def calPay(self):
        hourly_rate = int("Enter hourly rate for {}".format(self.full_name))
        hours = int("Enter hours {} has worked".format(self.full_name))
        self.pay = hourly_rate * hours
        print("salary info: ")


employee1 = Staff("Peter Smith", "Intern", 0, "peter@gmail.com")
employee1.calPay()
