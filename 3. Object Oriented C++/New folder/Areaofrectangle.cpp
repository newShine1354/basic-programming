#include <iostream>
#include <conio.h>
using namespace std;

class Rectangle
{
private:
    int Length;
    int Breadth;

public:
    int getdata();
    int Area();
};

int Rectangle ::getdata()
{
    cout << "Enter Length and Breadth " << endl;
    cin >> Length >> Breadth;
}

int Rectangle ::Area()
{
    cout << Length * Breadth << endl;
}

int main()
{
    Rectangle r1, r2;
    r1.getdata();
    r1.Area();
    r2.getdata();
    r2.Area();
    return 0;
}