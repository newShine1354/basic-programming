#include <iostream>
using namespace std;
int glo = 6;
void sum()
{
    int a;
    cout << glo;
}

int main()
{
    // int a = 4;
    // int b = 5;
    int a = 14, b = 15;
    float pi = 3.14;
    char c = 'u';
    int glo = 9;
    glo = 78;
    bool h = true;

    sum();
    cout << glo << h;
    
    // cout << "\nThe value of glo is: " << glo;
    // cout << "This is tutorial 4.\nHere the value of a is " <<a<< ".\nThe value of b is " <<b;
    // cout<<"\nThe value of pi is: "<<pi;
    // cout<<"\nThe value of c is: "<<c;
    return 0;
}