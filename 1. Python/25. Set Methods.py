s1 = {1, 2, 3, 4, 5}
s2 = {3, 4, 5, 6, 7}
print(s1)
'''Operations on set'''
# print(s2.union(s1))
# print(s1.intersection(s2))
# print(s1.symmetric_difference(s2))
# print(s1.difference(s2))

'''Updating a set'''
# s1.update(s2) # s1 = s1 union s2
# print(s1)
# s1.intersection_update(s2)
# print(s1)
# s1.symmetric_difference_update(s2)
# print(s1)
# s1.difference_update(s2)
# print(s1)

'''Checking conditions'''
# print(s1.isdisjoint(s2))
# print(s1.issuperset(s2)) # if s1 is superset of s2? result : Boolean expression
# print(s1.issubset(s2))

'''Simple operations for editing a set'''
# s1.add("nav")
# print(s1)
# s1.remove(2)
# s1.remove(12) # This will raise error as 12 is not present in s1
# print(s1)
# s1.discard(12) # This will not raise error even 12 is not present in s1
# print(s1)
# s1.pop() # pop out any value
# print(s1)
# del s2 # To delete the set
# s2.clear() # It converts set to empty set

# if 3 in s1:
#     print("Yes")
# else:
#     print("No")

# for values in s1:
#     print(values)
