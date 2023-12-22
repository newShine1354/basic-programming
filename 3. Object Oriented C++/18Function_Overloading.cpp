#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
#define pi = 3.14
using namespace std;

int add(int a, int b)
{
    cout << "Using funtion with 2 arguments " << endl;
    return a + b;
}

int add(int a, int b, int c)
{
    cout << "Using funtion with 3 arguments " << endl;
    return a + b + c;
}

// Calculate volume of cylinder
float volume(double r, int h)
{
    return (3.14 * r * r * h);
}

// Calculate volume of cylinder
int volume(int a)
{
    return (a * a * a);
}

// Calculate volume of Cuboid;
int volume(int l, int b, int h)
{
    return (l * b * h);
}
int main()
{
    cout << "The sum of 3 and 6 is " << add(3, 6) << endl;
    cout << "The sum of 3, 7 and 6 is " << add(3, 6, 7) << endl;
    cout << "Enter radius and height of Cylinder" << endl;
    int r, h;
    cin >> r >> h;
    cout << "volume of cylinder is " << volume(r, h) << endl;
    cout << "Enter side of cube" << endl;
    int a;
    cin >> a;
    cout << "volume of cube is " << volume(a) << endl;
    cout << "Enter lenth, breadth and height of Cuboid" << endl;
    int l, b;
    cin >> l >> b >> h;
    cout << "volume of cuboid is " << volume(l , b, h) << endl;
    return 0;
}