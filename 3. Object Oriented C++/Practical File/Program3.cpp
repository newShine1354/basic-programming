// 3. Write a function to find largest of three numbers. 
#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

int main()
{
    int a, b, c;
    cout << "Enter value of a " << endl;
    cin >> a;
    cout << "Value of a = " << a << endl;

    cout << "Enter value of b " << endl;
    cin >> b;
    cout << "Value of b = " << b << endl;

    cout << "Enter value of c " << endl;
    cin >> c;
    cout << "Value of c = " << c << endl;

    if (a > b && a > c)
    {
        cout << "a = " << a << " is greatest" << endl;
    }

    else if ( b > a && b > c) 
    {
        cout << "b = " << b << " is greatest" << endl;
    }

    else 
    {
        cout << "c = " << c << " is greatest" << endl;
    }
    return 0;
}