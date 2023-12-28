// OOPS - Classes and Objects

// C++ -->initially called --> C with classes by stroustrops
// Class -- > extension of structures (in C)
// Structures had limitations
// -members are public
// - No methods
// Classes --> structures + more
// Classes --> can have methods(functions) and properties
// Classes --> can make members as private & few as public

// you can declare objects along with the class declarion like this:
/*class Employee {
    class defination
} harry, rohanm, lovish;*/

// harry.salary = 8 ; makes no sense is salary is private
#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string>
using namespace std;

class binary
{
    string s;

public:
    void read(void);
    void chk_bin(void);
    void ones_complement(void);
    void display(void);
};

void binary ::read(void)
{
    cout << " Enter a binary number" << endl;
    cin >> s;
}

void binary ::chk_bin(void)
{
    for (int i = 0; i < s.length(); i++)
    {
        if (s.at(i) != '0' && s.at(i) != '1')
        {
            cout << "Incorrect binary format " << endl;
            exit(0);
        }
    }
}

void binary ::ones_complement(void)
{
    chk_bin(); // Nesting of memberfunction, implementable even funtion is p[rivate
    for (int i = 0; i < s.length(); i++)
    {
        if (s.at(1) == '0')
        {
            s.at(i) == '1';
        }
        else
        {
            s.at(i) = '0';
        }
    }
}

void binary ::display(void)
{
    for (int i = 0; i < s.length(); i++)
    {
        cout << s.at(i);
    }
    cout << endl;
}

int main()
{
    // Nesting of member function
    binary b;
    b.read();
    // b.chk_bin();
    b.ones_complement();
    b.display();
    return 0;
}