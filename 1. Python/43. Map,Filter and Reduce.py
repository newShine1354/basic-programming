''' Map '''
def cube(x):
    return x*x*x

l = (1, 2, 3, 4, 5, 6, 7, 8)
# l = {1, 2, 3, 4, 5, 6, 7, 8}
# l = [1, 2, 3, 4, 5, 6, 7, 8]
# newl = []
# for items in l:
#     newl.append(cube(items))
# print(newl)
''' Map '''
# newl = list(map(cube, l))
# l = (1, 2, 3, 4, 5, 6, 7, 8)
# newl = list(map(lambda x : x*x*x, l))
# print(newl)

''' Filter '''
# filter(predicate(function), Variable/Object)
# def filter_function(a):
#     return a>4
# l = (filter(filter_function, l))
# print(l)
# print(type(l))
# print(list(l))

''' Reduce '''
from functools import reduce

numbers = [1, 2, 3, 4, 5]
# Calculate the sum of numbers using the reduce function
sum = reduce(lambda x,y: x+y, numbers)
print(sum)

