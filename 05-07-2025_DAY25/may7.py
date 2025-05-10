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
# with open("test2.txt", "w") as file:
#     file.write("Hello again!")

# * copy test.txt to test3.txt
# with open("test.txt", "r") as f1:
#     with open("test3.txt", "w") as f2:
#         for i in f1:
#             f2.write(i)
