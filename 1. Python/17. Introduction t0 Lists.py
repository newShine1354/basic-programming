marks = [3, 5, 6, "Harry", True, 6, 7, 2, 32, 345, 23]
# Lists can be change using various list methods which we will discuss later
# print(marks)
# print(type(marks))
# print(len(marks))
# print(marks[0])
# print(marks[11]) # Show error as list have onle 11 elements of upto index 10.
# print(marks[-3])
# print(marks[len(marks)-3])

''' for loop'''
# for mark in marks:
#     print(mark)

''' List Slicing '''
# print(marks)
# print(marks[:]) # marks[0, len(marks)]
# print(marks[1:-1])
# print(marks[1:8])
# print(marks[1:8:2]) # Third argument is jump index
# print(marks[::-1]) # To reverse elements of list



''' Using if Statement '''
# if "Harry" in marks:
#     print(True)
# else:
#     print(False)

''' Same is aplicable in Strings. '''
# if "6" in marks:
#     print(True)
# else:
#     print(False)

''' List Comprehension '''
# lst = [i for i in range(10)]
# print(lst)
# lst = [i * i for i in range(10)]
# print(lst)
# lst = [i * i for i in range(10) if i % 2 == 0]
# print(lst)

''' Two Dimensional list '''
two_D = [[1, 2, 5], [2, 3], [4, 5], [8, 9]]
# print(two_D[0][1])

# for rows in two_D:
#     for item in rows:
#         print(item)
