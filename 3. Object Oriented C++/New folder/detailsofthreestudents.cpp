#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

class Student
{
private:
    char Name[20];
    int Roll_no;
    char Class[20];
    int Semester;

public:
    int getData();
    int showData();
};
int Student ::getData()
{
    cout << "Enter name of student " << endl;
    cin >> Name;
    cout << "Enter roll number of student " << endl;
    cin >> Roll_no;
    cout << "Enter class of student " << endl;
    cin >> Class;
    cout << "Enter semester of student " << endl;
    cin >> Semester;
}
int Student ::showData()
{
    cout << "Name of student is " << Name << endl;
    cout << "Roll number of student is " << Roll_no << endl;
    cout << "Class of student is " << Class << endl;
    cout << "Semester of student is " << Semester << endl;
}
int main()
{
    Student s1, s2, s3;
    s1.getData();
    s1.showData();
    s2.getData();
    s2.showData();
    s3.getData();
    s3.showData();
    return 0;
}