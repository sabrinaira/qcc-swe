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
        hourly_rate = int(input("Enter hourly rate for {}: ".format(self.full_name)))
        hours = int(input("Enter hours {} has worked: ".format(self.full_name)))
        self.pay = hourly_rate * hours
        print("salary of {} is {}".format(self.full_name, self.pay))

    @property
    def position(self):
        return self._position

    @position.setter
    def position(self, val):
        if val == "Inter" or val == "Manager" or val == "Developer":
            self._position = val
        else:
            print("Position is invalid. Nothing changed.")


employee1 = Staff("Peter Smith", "Intern", 0, "peter@gmail.com")
employee1.calPay()
print(employee1.position)
employee1.position = "Developer"
print(employee1.position)
employee2 = Staff("Lucas Doe", "--", 0, "lucas@gmail.com")
