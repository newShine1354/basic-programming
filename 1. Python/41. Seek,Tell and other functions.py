''' Seek, Read, Tell '''

# with open('41. file.txt', 'r') as f:
    # Move to the 10th byte in the file
    # f.seek(10)
    # print(f.tell()) # Tell seek value
# Read the next 5 bytes
#     data = f.read(5)
#     print(data)

""" Truncate """
with open('41. file.txt', 'w') as f:
    f.write('Hello World!')
    f.truncate(6) # Write only 5 character i.e Hello

with open('41. file.txt', 'r') as f:
    print(f.read())
