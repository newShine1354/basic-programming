a = input("Enter one number: ")

try:
    print(f"Multiplication table of {a} is: ")
    for i in range(1, 11):
        print(f"{int(a)} x {i} = {int(a)*i}")
# except Exception as e:
#     print(e) # e is error
except:
    print("Invaild input!") 

print("Some important lines of code") 
# print("End of program")

# try:
#     num = int(input("Enter an integer less than 2: "))
#     a = [6, 3]
#     print(a[num]) # If num is non integer: Valueerror
#                   # If num > 2: index error
# except ValueError:
#     print("Number entered is not an integer.")

# except IndexError:
#     print("Index Error")