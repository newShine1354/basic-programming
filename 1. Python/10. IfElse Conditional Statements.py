a = int(input("Enter your age \n"))
print("Your age is:", a)

# Conditional Operators
# <, >, <=, >=, ==, !=
# print(a>18)
# print(a<=18)
# print(a==18)
# print(a!=18)
''' Conditional operators return Boolean type '''

""" 1. If-else Statement """
# if(a>18):
#     print("You can drive")
#     print("Ofcource")
# else:
#     print("You cannot drive")
# print("Let's Start") # This line is not the part of else code as there is no indentation(tab space)

''' 2. Elif Statements '''
# num = int(input("Enter the value of num: "))
# if (num < 0):
#     print("Number is Negative")
# elif  (num == 0):
#     print("Number is zero")  
# elif  (num == 999):
#     print("Number is Special")
# else:
#    print("Number is positive.") 

''' 3. Nested if Statements '''
# num = int(input("Enter one number:\n"))
# if (num < 0):
#     print("Number is negative.")
# elif (num > 0):
#     if not (num >= 10): # if not Statement
#         print("Number is between 1-10")
#     elif (num > 10 and num <= 20):
#         print("Number is between 11-20")
#     else:
#         print("Number is greater than 20")
# else:
#     print("Number is zero")

# if "ar" in "Harry":
#     print(True)