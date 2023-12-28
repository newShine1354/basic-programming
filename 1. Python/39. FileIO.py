''' The read mode(Default mode) '''

# f = open('39. Time Table.txt', "r") # Show error if file doesn't exist. # The mode can be 'r' for reading, 'w' for writing and 'a' for appending and tere are several other modes.
# text = f.read()
# print(text)
# f.close()

''' The Write Mode '''

f = open('39 Time Table.txt', 'w') # Instead of showing error if file doesn't exist. This will create file
f.write('Hello World!')

''' The Append mode '''

# f = open('39.2 Time Table.txt', "a") # Instead of showing error if file doesn't exist. This will create file
# f.write('Hello World!')
# f.close()


''' Convinent method ''' # No need to use close.
# with open('39.2 Time Table.txt', 'a') as f:
#     f.write('Hello World!')
