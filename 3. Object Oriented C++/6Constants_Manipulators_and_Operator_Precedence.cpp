#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int a = 34;
    char c = 'c';
    cout << "the value of a was: " << a << endl;
    a = 45;
    c = '4';
    cout << "the value of a is: " << a << endl;

    // *********Constants in C++*********
    const int b = 4;
    cout << "the value of a was: " << b << endl;
    // b = 4; // Not posiible because we have declared b as a constant
    // error: assignment to read-only variable
    cout << "the value of a is: " << b << endl;

    // *********Manipulators*********
    // Used for the formatting of output.
    // 1. endl
    cout << "Manipulator used for next line." << endl;
    cout << "Manipulator used to specify width of the output is setw." << endl;
    // "setw" has defination in iomenip.h
    float m = 2.1;
    float n = 23.5;
    float o = .1;
    cout << "Value of m is " << setw(5) << m << endl;
    cout << "Value of n is " << setw(5) << n << endl;
    cout << "Value of o is " << setw(5) << o << endl;

    return 0;
}