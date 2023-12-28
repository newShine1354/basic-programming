# Funtions of two types Build-in and user-defined funtions
def CalculateGmean(a, b):
    mean = (a * b)/(a + b)
    print(mean)


def Greater_Number(a, b):
    if(a > b):
        print(a, ">", b)
    else: 
        print(b, ">=", a)

def isLesser(a, b):
    pass # to escape from error, if want to define function later.
        
a = 9
b = 8
# if(a > b):
#     print(a, ">", b)
# else: 
#     print(b, ">", a)
# gmean = (a * b)/(a + b)
# print(gmean)
CalculateGmean(a, b)
Greater_Number(a, b)
c = 7
d = 8
CalculateGmean(c, d)
Greater_Number(c, d)
