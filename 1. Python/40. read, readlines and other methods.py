''' Readline method '''
f = open('40.1 myfile.txt', "r") 
while True:
    line = f.readline()
    if not line:
        break
    print(line)

# i = 0
# f = open('40.1 myfile.txt', "r") 

# while True:
#     i = i + 1
#     line = f.readline()
#     if not line:
#         break
#     m1 = int(line.split(",")[0])
#     m2 = int(line.split(",")[1])
#     m3 = int(line.split(",")[2])
#     print(f"Marks of Student {i} in physics is {m1*2}")
#     print(f"Marks of Student {i} in Mathematics is {m2}")
#     print(f"Marks of Student {i} in Chemistry is {m3}\n")

''' Writeline method '''
# f = open('40.2 myfile.txt', "w")
# lines = [f"line{i}\n" for i in range(1,10)]
# f.writelines(lines)
# f.close()

# f = open('40.2 myfile.txt', "w")
# lines = ["line 1\n", "line 2\n", "line 3\n"]
# for line in lines:
#     f.write(line + '\n')
# f.close()


