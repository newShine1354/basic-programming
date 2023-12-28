''' Break Statement '''
# for i in range(13):
#     if(i == 10):
#         break
#     print("5 X", i + 1 , "=", 5 * (i + 1))

# for i in range(1,101,1):
#     print(i ,end=" ")
#     if(i==50):
#         break
#     else:
#         print("Mississippi")
# print("Thank you")

''' Continue Statement '''
# for i in range(1, 13):
#     if(i == 10):
#         print("Skip the iteration")
#         continue
#     print("5 X", i , "=", 5 * i)

for i in [2,3,4,6,8,0]:
    if (i%2!=0):
        continue
    print(i)

''' Do while loop '''
# i = 0
# while True: # for infinite loop
#     print(i)
#     i = i + 1
#     if(i%100 == 0):
#         break