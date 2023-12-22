#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

// ********** Recursions and Recursive Funtions **********
// When a funtion calls itself it is called recursion and the function which calls itself is called recursive function
// Step by step calculation of factorial 4 (4!)
// factorial(4) = 4 * factorial(3)
// factorial(4) = 4 * 3 * factorial(2)
// factorial(4) = 4 * 3 * 2 * factorial(1)
// factorial(4) = 4 * 3 * 2 * 1

int factorial(int n)
{
    if (n <= 1)
    {
        return 1;
    }
    return n * factorial(n - 1);
}

int Fibonacci(int n)
{
    if(n<2)
    {
        return 1;
    }
    return Fibonacci(n - 2) + Fibonacci(n - 1);
}

int main()
{
    // For Recursions Function

    // Factorial of a number;
    // 6! = 6*5*4*3*2*1 = 720
    // 0! = 1
    // 1! = 1
    // n! = n * (n-1)!
    // int a;
    // cout << "Enter a number ";
    // cin >> a;
    // cout << "The Factorial of " << a << " is equal to " << factorial(a);

    // The Fibonacci Sequence

    // 1, 2, 3, 5, 8, 13, 21,.......
    // To find nth term  of Fibonacci Sequence
    // 5th term  of Fibonacci Sequence
    // Fibonacci(5) = Fibonacci(3) + Fibonacci(4)
    // Fibonacci(5) = Fibonacci(1) + Fibonacci(2) + Fibonacci(2) + Fibonacci(3)
    // Fibonacci(5) = 1 + Fibonacci(0) + Fibonacci(1) + Fibonacci(0) + Fibonacci(1) + Fibonacci(1) + Fibonacci(2)
    // Fibonacci(5) = 1 + Fibonacci(0) + Fibonacci(1) + Fibonacci(0) + Fibonacci(1) + Fibonacci(1) + Fibonacci(0) + Fibonacci(1)
    // Fibonacci(5) = 8
    int a;
    cout << "Enter the term number";
    cin >> a;
    cout << "The term in fibonacci sequence at position " << a << " is equal to " << Fibonacci(a);


    return 0;
}