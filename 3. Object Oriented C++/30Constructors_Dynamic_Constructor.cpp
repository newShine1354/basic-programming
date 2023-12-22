#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

class complex
{
    int a, b;

public:
    // Creating Constructors
    // Constructor is a special member function with the same name as of the class.
    // It is used to initialize the objects of its class.
    // It is used to automatically invoked whenever an objects is created.

    complex(void); // Constructor Declaration
    void printdata(void)
    {
        cout << "Your number is " << a << " + " << b << "i" << endl;
    }
};

complex ::complex(void) // This is a Default constructor, because no parameter is taken.
{
    a = 10;
    b = 12;
}

int main()
{
    complex c1, c2, c3;
    c1.printdata();
    c2.printdata();
    c3.printdata();
    return 0;
}

/*Charactertics of constructor 
1. It should be declared in the public section of the class.
2. They are automatically invoked whenever the object is created.
3. They cannot return values and do not have return types.
4. It can have default arguments.
5. We can not refer to their address.*/ 