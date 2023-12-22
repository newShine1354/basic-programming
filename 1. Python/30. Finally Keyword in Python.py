def func1():
    try:
        l = [1, 2, 3, 4]
        i = int(input("Enter the index: "))
        print(l[i])
        return 1
    except:
        print("Some error occoured.")
        return 0
    finally:
        print("I am always executed.") # This will execute and this is the use of finally to execult statements in a function returning a value.
    # print("I am always executed.") # this will not execute even it is inside the function as we use return statement

x = func1()
# print(x)


    