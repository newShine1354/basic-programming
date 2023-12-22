x = 4 # Global Variable
# z = 6
# print(x)

def hello():
    x = 5 # Local Variable
    global z # To change and declare global value
    z = 7
    global a
    a = 1
    y = 1
    print(f"The global value of z is {z}")
    print(f"The local x is {x}")
    print("Hello Harry")

# hello()
# print(f"The global x is {x}")
# print(a)

# print(y) # This will cause an error because y is a local variable and is not accessible outside of the function

