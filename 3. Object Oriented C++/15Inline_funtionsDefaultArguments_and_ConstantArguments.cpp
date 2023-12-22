#include <iostream>
#include<conio.h>
#include<iomanip>
#include<string.h>
using namespace std;

// Inline function
// It is a request to compiler to make a funtion inline
// For single line Instruction
// When not to use?
// Static variables

// int product(int a, int b)
// {
//     return a * b;
// }
inline int product(int a, int b)
{
    return a * b;
}

// Static value
// int product(int a, int b)
// {
//     static int c = 0; // This executes only once
//     c = c + 1;        // Next time this will run, the value will be retained
//     return a * b + c;
// }

// // Default Arguments
// float moneyReceived(int currentMoney, float factor = 1.04)
// {                     // Fix for all, Not fix for all
//     return currentMoney * factor;
// }

// Constant Arguments
// int strlen(const char *p)
// {

// }

int main()
{
    int a, b;
    cout << "Enter the value of a and b " << endl;
    cin >> a >> b;
    // For int product function and inline int product function above
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;
    cout << "The product of a and b is " << product(a, b) << endl;

    // For Default Arguments
    // int money = 100000;
    // cout << "If you have " << money << " Rs in your bank account, you will recive " << moneyReceived(money) << " Rs after one year." << endl;
    // cout << "For VIP : If you have " << money << " Rs in your bank account, you will recive " << moneyReceived(money, 1.1) << " Rs after one year.";
    // return 0;
}