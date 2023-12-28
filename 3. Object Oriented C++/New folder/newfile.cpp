#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;
class student
{
private:
int marks;
public:
    int rollno;
    char name[10];

    void read()
    {
        cout << "entrr data";
        cin >> rollno >> name ;
    }
    void display()
    {
        cout << "rollno is" << rollno << endl;
        cout << "name is" << name;
    }
};
class result : public student
{

    int marks;
    void read1()
    {
        cout << "enter marks ";

        cin >> marks;
        cout << "marks are " << marks;
    }
};
int main()
{
    student s1;
    s1.read();
    s1.display();
    s1.rollno = 3;
    cout << s1.rollno << endl;
    return 0;
}