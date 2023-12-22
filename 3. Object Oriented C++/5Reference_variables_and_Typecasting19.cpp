#include <iostream>
using namespace std;
int c = 45;
int main()
{
    // Scope Resolution Operator (::)
    // int a, b, c;
    // cout << "Enter First number " << endl;
    // cin >> a;

    // cout << "Enter Second number ";
    // cin >> b;
    // c = a + b;

    // cout << "Sum of Two Numbers is " << c << endl;
    // cout << "The value of Global c is " << ::c;

    // *********Float, Double and Long Double Literals*********
    float d = 6.15f;
    long double e = 6.15l;
    cout << sizeof(6.15) << endl;
    // even if we declare float d = 6.15, than also the complier will consider a decimal number as a "double"
    cout << sizeof(6.15f) << endl;
    cout << sizeof(6.15F) << endl;
    cout << sizeof(6.15l) << endl;
    cout << sizeof(6.15L) << endl;

    // *********Reference variables*********
    float x = 336;
    float &y = x;
    // "&" makes y a reference variable
    cout << x << endl;
    x = 500;
    cout << y << endl;

    // *********Typecasting*********
    // Converting one data type into another
    int f = 30;
    float g = 30.12;
    cout << "The value of f is " << (float)f << endl;
    cout << "The value of f is " << float(f) << endl;

    cout << "The value of g is " << int(g) << endl;
    cout << "The value of g is " << (int)g << endl;
    int h = int(g);

    cout << f + g << endl;
    cout << f + (int)g << endl;
    cout << f + int(g) << endl;
    cout << h;

    return 0;
}
