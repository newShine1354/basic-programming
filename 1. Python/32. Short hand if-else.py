a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print(a,">",b) if a>b else print(b,'=',a) if a == b else print(b,'>',a)

c = 12 if a>b else 45 if a==b else 89
print(c)

d = 3 if a>b else None
# d = 3 if a>b else ""
print(d)