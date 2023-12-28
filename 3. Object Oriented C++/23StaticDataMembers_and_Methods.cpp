#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

// Static variables are also called class variables
class Employee
{
private:
    int id;
    static int count;

public:
    void setData(void)
    {
        cout << "Enter Your id " << endl;
        cin >> id;
        count++;
    }

    void getData()
    {
        cout << "Your id is " << id << " and this is Employee no. " << count << endl;
    }
    // Static Functions can access only static variables and static functions
    static void getCount(void)
    {
        cout << "The value of cout is " << count << endl;
    }
};

int Employee ::count = 1000; // default value is 0 because cout is static variable
                             // count is the static data member of class Employee

int main()
{
    Employee harry, rohan, lavish;
    // harry.id = 1 ;
    // harry.cout= 1 ; // cannot do this beacause id and cout are private members

    harry.setData();
    harry.getData();

    harry.setData();
    harry.getData();
    Employee ::getCount();

    rohan.setData();
    rohan.getData();
    Employee ::getCount();

    lavish.setData();
    lavish.getData();
    Employee ::getCount();

    return 0;
}