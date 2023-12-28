'''Required arguments'''
# def average(a, b): 
#     print("The average is", (a + b)/2)

# average(4,6)

'''Default arguments'''
# def average(a = 6, b = 4): 
#     print("The average is", (a + b)/2)

# average()
# average(2, 3)
# average(5) # a = 5, b(Default) = 4 
# average(b = 9) # a is default

'''Keyword arguments'''
# def average(a = 6, b = 4): 
#     print("The average is", (a + b)/2)

# average(2, 3)
# average(b = 3, a = 2) # Keyword arguments
# Order doesnot matter.

'''Variable-length Arguments'''
def average(*numbers):
    print(type(numbers))
    sum = 0
    for i in numbers:
        sum = sum + i
    # print("Average is:", sum/len(numbers))
    return sum/len(numbers)

# average(5, 6) # For Line 30
# c = average(5, 6)
d = average(5, 6, 7, 8)
# print(c)
print(d)
