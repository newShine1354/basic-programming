#include<iostream>
#include<conio.h>
using namespace std;

class Student
{
    private:
    char Name[20];
    int Roll_No;
    char Class[40];
    int Semester; 
    public:
    int getdata();
    int showdata();

};

int Student :: getdata(){
    cout << "Enter the name of Student " <<endl;
    cin >> Name;
    cout << "Enter the roll number of Student " <<endl;
    cin >> Roll_No;
    cout << "Enter the class of Student " <<endl;
    cin >> Class;
    cout << "Enter the semester of Student " <<endl;
    cin >> Semester;
}

int Student :: showdata(){
    cout << "Name of Student is "<< Name <<endl;
    cout << "Roll number of Student is "<< Roll_No <<endl;
    cout << "Class of Student is "<< Class <<endl;
    cout << "Semester of Student is "<< Semester <<endl;
}

int main()
{
    Student s1, s2;
    s1.getdata();
    s1.showdata();
    // s2.getdata();
    return 0;
}