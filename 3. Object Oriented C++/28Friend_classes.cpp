#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

class complex;

class Calculator
{
public:
    int add(int a, int b)
    {
        return (a + b);
    }
    int sumRealcomplex(complex o1, complex o2);
    int sumCompcomplex(complex o1, complex o2);
};

class complex
{
private:
    int a, b;
    friend Calculator;

public:
    void
    setNumber(int n1, int n2)
    {
        a = n1;
        b = n2;
    }

    void printNumber()
    {
        cout << "Your number is " << a << " + " << b << "i" << endl;
    }
};

int Calculator ::sumRealcomplex(complex o1, complex o2)
{
    return (o1.a + o2.a);
}

int Calculator ::sumCompcomplex(complex o1, complex o2)
{
    return (o1.b + o2.b);
}
int main()
{
    complex o1, o2;
    Calculator Calc;
    o1.setNumber(2, 3);
    o2.setNumber(4, 5);
    o1.printNumber();
    o2.printNumber();
    int real_res = Calc.sumRealcomplex(o1, o2);
    int complex_res = Calc.sumCompcomplex(o1, o2);
    cout << "Sum of real part of complex numbers is " << real_res << endl;
    cout << "Sum of complex part of complex numbers is " << complex_res << endl;
    return 0;
}