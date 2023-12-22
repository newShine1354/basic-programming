'''My answer'''
Computer = [1,0,0,1,-1]
print("Enter -1, 0, 1 for snake, water, gun respectively.")
i = 0
j = 0
k = 0
for outcomes in Computer:
    move = int(input(f"Enter your move {i + 1}\n"))
    print(f"Opponent move: {Computer[i]}")
    if (move != -1) and (move !=0) and (move != 1):
        print("Invalid Syntax")
    else:
        if move == Computer[i]:
            Computer.append(1)    
            Computer.append(-1)    
            Computer.append(-1)    
            Computer.append(0)    
            print("Draw")
        elif (move == 0 and Computer[i] == -1) or (move == 1 and Computer[i] == 0) or (move == -1 and Computer[i] == 1):
            k = k + 1
            print(f"You lose, player points = {j}, computer points = {k}")
        else:
            j = j + 1
            print(f"You win, player points = {j}, computer points = {k}")
        i = i + 1
    if k == 3 or j == 3:
        break
print(f"Your total scores are {j}")
if j == 3:
    print("Congratulations, you won the game.")
else:
    print("You loss the game")
    
''' Harry's answer '''
# import random

# def check(Computer, move):
#     if Computer == move:
#         return 0
#     if(move == 0 and Computer == -1) or (move == 1 and Computer == 0) or (move == -1 and Computer == 1):
#         return -1
#     return 1

# Computer = random.randint(-1, 1) # To print random integer between and including -1 and 1.
# move = int(input("Enter -1, 0, 1 for snake, water, gun respectively: "))

# score = check(Computer, move)

# print("You: ",move)
# print("Computer: ",Computer)
# if (score == 0):
#     print("It's a draw")
# elif (score == -1):
#     print("You Lose")
# else:
#     print("You won")

