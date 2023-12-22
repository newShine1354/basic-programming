# Factorial of a number

def Factorial(n):
    if(n == 0 or n==1):
        return 1
    else:
        return n * Factorial(n-1)

print(Factorial(6))

# nth term of a Fibonacci Series

def Fibonacci(m):
    if(m < 2):
        return 1
    else:
        return (Fibonacci(m - 1) + Fibonacci(m - 2))
    
print(Fibonacci(5))    
    

