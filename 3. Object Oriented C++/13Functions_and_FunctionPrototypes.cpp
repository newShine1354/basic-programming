#include <iostream>
using namespace std;

int sum(int a, int b)
{
    // a and b are Formal parameters
    // Formal and Actual parameters can be same.
    int c = a + b;
    return c;
}
void g(){
    cout<<"\nHello, Good morning";
}

// funtion prototype
// type funtion-name (arguments);
int sum(int a, int b); // --> Acceptable
// int sum(int, int); // --> Acceptable
// int sum(int a, b); // --> Not Acceptable 
void g (void); // --> Acceptable
// void g (); // --> Acceptable

int main()
{
    int num1, num2;
    cout << "Enter first number " << endl;
    cin >> num1;
    cout << "Enter second number " << endl;
    cin >> num2;
    // num1 and num2 are actual parameters
    cout << "Sum of num1 and num2 is " << sum(num1, num2) << endl;
    g();
    return 0;
}