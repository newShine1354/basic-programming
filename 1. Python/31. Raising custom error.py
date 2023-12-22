a = int(input("Enter any number between 5 and 9: "))

if(a<5 and a>9):
    raise ValueError("Value should be between 5 and 9")

# b = input("Enter value as Harry told you: ")
# if(b == "quit"):
#     print("Corret input")
# else:
#     raise ValueError("Incorrect input")

'''Defining Custom Exceptions using classes'''