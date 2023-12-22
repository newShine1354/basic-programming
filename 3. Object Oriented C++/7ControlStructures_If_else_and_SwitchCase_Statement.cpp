#include <iostream>
using namespace std;

int main()
{
    int age;
    cout << "Enter your age" << endl;
    // cin >> age;
    // if ((0 < age)&&( age <= 10))
    // {
    //     cout << "Child";
    // }
    // else if ((10 < age) && (age <= 18))
    // {
    //     cout << "Teenager";
    // }
    // else if ((60 > age) && (age > 18))
    // {
    //     cout << "Adult";
    // }
    // else if ((age > 60) && (age < 100))
    // {
    //     cout << "Old";
    // }
    // else
    // {
    //     cout << "Enter valid age";
    // }

// Selection control structure: Switch Case statements
    switch (age)
    {
    case (18):
    cout<<"You are 18";
        break;

    case (2):
    cout<<"You are 18";
        break;

    case (22):
    cout<<"You are 18";
        break;

    default:
    cout<<"No special case";
        break;
    }
    return 0;
}