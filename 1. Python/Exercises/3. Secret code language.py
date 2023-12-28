sentence = input("Enter any sentence: ")
l1 = sentence.split()
print(l1)
rc = ["q","b","e","d","w","b","f","p","o","m","z","z","y","e","s","v","a","f","q","b","e","d","w","b","f","p","o","m","z","z","y","e","s","v","a","f"]
Coding = input("1 for Coding or 0 for Decoding:\n")

if(Coding == '1'):
    for i in range(0, len(l1)):
        if(len(l1[i]) <= 3):
            l1[i] = l1[i][::-1]
        else:
            l1[i] = rc[i] + rc[i+1] + rc[i+2] + l1[i][-1] + l1[i][0:-1] + rc[i - 2]
    sentence = ' '.join(l1)
    print(sentence)
else:
    for i in range(0, len(l1)):
        if(len(l1[i]) <= 3):
            l1[i] = l1[i][::-1]
        else:
            l1[i] = l1[i][4:-1] + l1[i][3]

    sentence = ' '.join(l1)
    print(sentence) 
