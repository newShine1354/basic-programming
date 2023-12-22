x = int(input("Enter a number: \n"))
match x:
    case 0:
        print("x is zero")
    case 4:
        print("Case is 4")
    case _: # _ is used for default case
        print(x) 
    case _ if x != 90:
        print(x, "is not 90")
    case _ if x != 80:
        print(x, "is not 90")
    
