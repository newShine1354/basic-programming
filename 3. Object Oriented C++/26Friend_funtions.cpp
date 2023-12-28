#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

class complex
{
private:
    int a, b;

public:
    void setNumber(int n1, int n2)
    {
        a = n1;
        b = n2;
    }
    friend complex sumComplex(complex o1, complex o2);
    void printNumber()
    {
        cout << "Your number is " << a << " + " << b << "i" << endl;
    }
};

complex sumComplex(complex o1, complex o2)
{
    complex o3;
    o3.setNumber((o1.a + o2.a), (o1.b + o2.b));
    return o3;
}

int main()
{
    complex c1, c2, sum;
    c1.setNumber(2, 3);
    c1.printNumber();

    c2.setNumber(4, 5);
    c2.printNumber();

    sum = sumComplex(c1, c2);
    sum.printNumber();
    return 0;
}

/*
Properties of friend function
1. Not in scope of class
2. Since it is not in the scope of the class, it cannot be called from the object
   of that class. c1.sumComplex() == Invalid
3. Can be Invoked without the help of any object
4. Usually contains object as arguments
5. Can be declared inside public or private
6. It cannot access the members directly by their names and need object_name.member
   _name to access any member.
 */