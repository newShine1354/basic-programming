// #include<iostream>
// #include<conio.h>
// #include<iomanip>
// #include<string.h>
// using namespace std;

// class complex
// {
//     int a, b;

// public:

//     complex(int, int ); // This is a Parameterized constructor as it takes two parameterized.
//     void printdata(void)
//     {
//         cout << "Your number is " << a << " + " << b << "i" << endl;
//     }
// };

// complex ::complex(int x, int y)
// {
//     a = x;
//     b = y;
// }
// int main()
// {
//     // Implicit call
//     complex a(4, 5);
//     a.printdata();

//     // Explicit call
//     complex b = complex(5, 7);
//     b.printdata();
//     return 0;
// }

#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
#include <cmath>
using namespace std;

class Point
{
    int x, y;

public:
    Point(int a, int b)
    {
        x = a;
        y = b;
    }
    friend int SumofPoints(Point c, Point d);
    void displayPoint()
    {
        cout << "The point is (" << x << "," << y << ")." << endl;
    }
};
int SumofPoints(Point c, Point d)
{
    return sqrt(pow((c.x - d.x),2) + pow((c.y - d.y),2));
}
int main()
{
    int sum;
    Point p(9, 4), q(5, 6);
    p.displayPoint();
    q.displayPoint();
    sum = SumofPoints(p, q);
    cout << "The resultant of 2 points is " << sum << endl;
    return 0;
}