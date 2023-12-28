// 4. Write a program to find the factorial of a number.
#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

int facto(int n);

int main()
{
    int a;
    cout << "Enter a number " << endl;
    cin >> a;
    cout << "Factorial of " << a << " is " << facto(a);
    return 0;
}

int facto(int n)
{
    if (n < 2)
    {
        return 1;
    }
    return n * facto(n - 1);
}