#include <iostream>
using namespace std;

// **********Structures**********
// User defined datatype used to combine difference types
// struct employee
// {
//     /* data */
//     int Id;
//     char favChar;
//     float Salary;
// }

// TO use a shortcut word for struct employee, Syntax:
typedef struct employee
{
    /* data */
    int Id;       // 4 bites
    char favChar; // 1
    float Salary; // 4
    // Memory used: 9 bites
} ep;
// Now we can use ep instead of using struct employee

// **********Unions**********
union money
{
    /* data */
    float Pounds; // 4 bites
    char Car;     // 1
    int Rupee;    // 4
    // Memory used: 1 or 4 bites
};

int main()
{
    // For Structures
    // ep harry;
    // struct employee Noor;
    // ep Ramneek;
    // harry.Id = 1;
    // harry.favChar = 'a';
    // harry.Salary = 12000000;
    // Noor.Id = 2;
    // Noor.favChar = 'e';
    // Noor.Salary = 13000000;
    // Ramneek.Id = 3;
    // Ramneek.favChar = 'f';
    // Ramneek.Salary = 11000000;
    // cout << "The value of " << harry.Id << endl;
    // cout << "The value of " << harry.favChar << endl;
    // cout << "The value of " << harry.Salary << endl;
    // cout << "The value of " << Noor.Id << endl;
    // cout << "The value of " << Noor.favChar << endl;
    // cout << "The value of " << Noor.Salary << endl;
    // cout << "The value of " << Ramneek.Id << endl;
    // cout << "The value of " << Ramneek.favChar << endl;
    // cout << "The value of " << Ramneek.Salary << endl;

    // For Unions
    union money m1;
    m1.Rupee = 100;
    m1.Car = 'c';
    cout << m1.Rupee << endl;
    cout << m1.Car << endl;
    // We can use one at a time in case of union, either Car or Rupee

    // **********Enum**********
    // Used to assign integer numbers
    enum Meal
    {
        Breakfast,
        Lunch,
        Dinner
    };
    Meal m1 = Breakfast; 
    cout << Breakfast << endl;
    cout << Lunch << endl;
    cout << Dinner << endl;

    return 0;
}