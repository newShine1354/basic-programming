// There are two types of Header Files:
// 1. System header files: It comes with the Compiler.
#include <iostream>
// 2. User defined header files: It is written by the Programmer.
// #include"This.h" // (This will produce error if this.h is not present in currnet directory)
// Use website cpp reference for header file.
using namespace std;

int main()
{
    int a = 4, b = 5, c;
    // *********Operators in C++*********
    cout << "\n Operators in C++:";

    // *********Arithematic Operators*********
    cout << "\n Following are the Arithematic operators in C++:";
    cout << "\n The value of a+b is " << a + b;
    cout << "\n The value of a-b is " << a - b;
    cout << "\n The value of a*b is " << a * b;
    cout << "\n The value of a/b is " << a / b; // Result of division of Integers is an Integer in C++
    cout << "\n The value of a%b is " << a % b;
    cout << "\n The value of a++ is " << a++; /* Means print a and then add 1 in the value of a i.e for next execution the value of 'a' will be 5*/
    // New value of a = 5
    cout << "\n The value of a-- is " << a--;
    // New value of a = 4
    cout << "\n The value of ++a is " << ++a; /*Increse the value of a by 1 then print the new value. */
    // New value of a = 5
    cout << "\n The value of --a is " << --a;
    // New value of a = 4

    // *********Comparison Operators*********
    cout << "\n Following are the Comparison operators in C++:";
    cout << "0 means False and 1 means True";
    cout << "\n The value of a==b is " << (a == b);
    cout << "\n The value of a==b is " << (a != b);
    cout << "\n The value of a<b is " << (a < b);
    cout << "\n The value of a>b is " << (a > b);
    cout << "\n The value of a<=b is " << (a <= b);
    cout << "\n The value of a>=b is " << (a >= b);

    // *********Logical Operators*********
    cout << "\n Following are the Logical operators in C++:";
    cout << "\n The value of Logical and Operator ((a == b) && (a < b)) is " << ((a == b) && (a < b));
    // Logical "and" Operator: &&
    cout << "\n The value of Logical or Operator ((a == b) && (a < b)) is " << ((a == b) || (a < b));
    // Logical "or" Operator: ||
    cout << "\n The value of Logical not Operator (!(a < b)) is " << (!(a < b));
    // Logical "not" Operator: !

    // *********Bitwise Operators*********
    cout << "\n Following are the Bitwise operators in C++:";
    cout << "\n The value of a&b is " << (a & b);
    cout << "\n The value of a|b is " << (a | b);
    cout << "\n The value of a^b is " << (a ^ b);
    cout << "\n The value of ~b is " << (~b);
    cout << "\n The value of a<<2 is " << (a << 2);
    cout << "\n The value of a>>2 is " << (a >> 2);

    // *********Assignment Operators*********
    a = 30, b = 20;
    cout << "\n Following are the Assignment operators in C++:";
    c = a + b;
    cout << "\n The value of c is a+b i.e " << c;
    a += b;
    cout << "\n The new value of a is " << a;
    // i,e a = 50
    a -= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 30
    a *= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 600
    a /= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 30
    a %= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 10
    a <<= 1;
    cout << "\n The new value of a is " << a;
    // i,e a = 20
    a >>= 2; 
    cout << "\n The new value of a is " << a;
    // i,e a = 5 
    a &= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 4
    a ^= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 16
    a |= b;
    cout << "\n The new value of a is " << a;
    // i,e a = 20

    return 0;
}
