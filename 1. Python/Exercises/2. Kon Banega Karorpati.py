questions = [["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"], ["Calculate 5 + 5", "5", "10", "0", "25"]]
levels = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1280000, 2560000, 5120000, 10000000]
anskey = ["b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c"]
money = 0

for i in range(0,len(questions)):
    question = questions[i]
    print(f"\nQuestion for Rs. {levels[i]}")
    print(question[0])
    print(f"a. {question[1]}            b. {question[2]}")
    print(f"c. {question[3]}            d. {question[4]}")
    reply = (input("Enter your answer: "))
    if(reply == anskey[i]):
        print(f"Correct answer, you have won {levels[i]}")
        if(i == 4):
            money = 10000
        elif(i == 9):
            money = 320000
        elif(i == 14):
            money = 10000000
    else:
        print("Wrong answer!")
        break
print(f"You won Rs.{money}")    


 


