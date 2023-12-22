#include <iostream>
using namespace std;

int sum(int a, int b)
{
    int c = a + b;
    return c;
}

// This will not swap a and b
void swap(int a, int b)
{                 // Temp a b
    int temp = a; //  4   4 5
    a = b;        //  4   5 5
    b = temp;     //  4   5 4
}

// Call by reference using pointers
void swapPointer(int *a, int *b)
{                  // Temp a b
    int temp = *a; //  4   4 5
    *a = *b;       //  4   5 5
    *b = temp;     //  4   5 4
}

// Call by reference using reference variables
void swapPointerVar(int &a, int &b)
{                  // Temp a b
    int temp = a; //  4   4 5
    a = b;       //  4   5 5
    b = temp;     //  4   5 4
}

int main()
{
    int x = 4, y = 5;
    // cout << "The sum of 4 and 5 is " << sum(x, y) << endl;
    cout << "The value of x is " << x << " and the value of b is " << y << endl;
    // swap(x, y); // THis will not swap a and b
    // swapPointer(&x, &y); // This wil swap a and b using pointers
    swapPointerVar(x, y); // This wil swap a and b using Reference variables
    cout << "The value of x is " << x << " and the value of b is " << y << endl;

    return 0;
}