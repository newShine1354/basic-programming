import time
name = input("Enter your name:\n")
CurrentTime = time.strftime("%H:%M:%S")
print(CurrentTime)
Hours = int(time.strftime('%H'))
print(Hours)
Minutes = int(time.strftime('%M'))
print(Minutes)
Seconds = int(time.strftime('%S'))
print(Seconds)
if(Hours > 0 and Hours < 12 or Hours == 24):
    print("Good morning,", name)
elif(Hours >= 12 and Hours < 17):
    print("Good Afternoon,", name)
elif(Hours >= 17 and Hours < 22):
    print("Good Evening,", name)
else:
    print("Good Night,", name)
    

