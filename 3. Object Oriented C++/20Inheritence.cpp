#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;
// Inheritance refers to making new class called derived class from base/existing class
// There are 5 types of Inheritance
// 1. Singular Inheritance
// 2. Multiple Inheritance
// 3. Multilevel Inheritance
// 4. Hierarchal Inheritance
// 5. Hybrid Inheritance

// 1. Singular Inheritance
// class A
// {
// private:
//     char name[20];
//     int age;
//     int phone_number;

// public:
//     int getdata();
//     int showdata();
// };

// int A ::getdata()
// {
//     cout << "Enter your name " << endl;
//     cin >> name;
//     cout << "Enter your age " << endl;
//     cin >> age;
//     cout << "Enter your phone number " <<endl;
//     cin >> phone_number;
// }

// int A ::showdata()
// {
//     cout << "Your name is " << name <<endl;
//     cout << "Your age is " << age <<endl;
//     cout << "Your phone number is " << phone_number <<endl;
// }

// class B : public A
// {
// public:
//     int showinformation();
// };

// int B ::showinformation()
// {
//     cout << "Your salary is 20000 " << endl;
//     cout << "Your time period is 6 years " << endl;
// }

// 2. Multiple Inheritance
// class A
// {
// private:
//     char name;
//     int age;
//     int phone_number;

// public:
//     int getdata();
//     int showdata();
// };

// int A ::getdata()
// {
//     cout << "Enter your name " << endl;
//     cin >> name;
//     cout << "Enter your age " << endl;
//     cin >> age;
//     cout << "Enter your phone number " << endl;
//     cin >> phone_number;
// }

// int A ::showdata()
// {
//     cout << "Your name is " << name <<endl;
//     cout << "Your age is " << age <<endl;
//     cout << "Your phone number is " << phone_number <<endl;
// }

// class B
// {
// public:
//     int showinformation();
// };

// int B ::showinformation()
// {
//     cout << "Your salary is 20000 " <<endl;
//     cout << "Your time period is 6 years " <<endl;
// }

// class C : public A, public B
// {
// public:
//     int Qualifications();
// };

// int C ::Qualifications()
// {
//     char Qualification[30];
//     cout << "Enter your highest qualification " << endl;
//     cin >> Qualification;
//     cout << "Highest qualification is " << Qualification << endl;
// }

// 3. Multilevel Inheritance
// class A
// {
// private:
//     char name;
//     int age;
//     int phone_number;

// public:
//     int getdata();
//     int showdata();
// };

// int A ::getdata()
// {
//     cout << "Enter your name " << endl;
//     cin >> name;
//     cout << "Enter your age " << endl;
//     cin >> age;
//     cout << "Enter your phone number " << endl;
//     cin >> phone_number;
// }

// int A ::showdata()
// {
//     cout << "Your name is " << name << endl;
//     cout << "Your age is " << age << endl;
//     cout << "Your phone number is " << phone_number << endl;
// }

// class B : public A
// {
// public:
//     int showinformation();
// };

// int B ::showinformation()
// {
//     cout << "Your salary is 20000 " << endl;
//     cout << "Your time period is 6 years " << endl;
// }

// class C : public B
// {
// public:
//     int Qualifications();
// };

// int C ::Qualifications()
// {
//     char Qualification[30];
//     cout << "Enter your highest qualification " << endl;
//     cin >> Qualification;
//     cout << "Highest qualification is " << Qualification << endl;
// }

// 4. Hierarchical Inheritance
// class A
// {
// private:
//     char name;
//     int age;
//     int phone_number;

// public:
//     int getdata();
//     int showdata();
// };

// int A ::getdata()
// {
//     cout << "Enter your name " <<endl;
//     cin >> name;
//     cout << "Enter your age " <<endl;
//     cin >> age;
//     cout << "Enter your phone number " <<endl;
//     cin >> phone_number;
// }

// int A ::showdata()
// {
//     cout << "Your name is " << name <<endl;
//     cout << "Your age is " << age <<endl;
//     cout << "Your phone number is " << phone_number <<endl;
// }

// class B : public A
// {
// public:
//     int showinformation();
// };

// int B ::showinformation()
// {
//     cout << "Your salary is 20000 " <<endl;
//     cout << "Your time period is 6 years " <<endl;
// }

// class C : public A
// {
// public:
// int Qualifications();
// };

// int C ::Qualifications()
// {
//     char Qualification[30];
//     cout << "Enter your highest qualification " <<endl;
//     cin >> Qualification;
//     cout << "Highest qualification is "<< Qualification <<endl;
// }

// 5. Hybrid Inheritance
class A
{
private:
    char name;
    int age;
    int phone_number;

public:
    int getdata();
    int showdata();
};

int A ::getdata()
{
    cout << "Enter your name ";
    cin >> name;
    cout << "Enter your age ";
    cin >> age;
    cout << "Enter your phone number ";
    cin >> phone_number;
}

int A ::showdata()
{
    cout << "Your name is " << name;
    cout << "Your age is " << age;
    cout << "Your phone number is " << phone_number;
}

class B : public A
{
public:
    int showinformation();
};

int B ::showinformation()
{
    cout << "Your salary is 20000 ";
    cout << "Your time period is 6 years ";
}

class C : public A
{
public:
int Qualifications();
};

int C ::Qualifications()
{
    char Qualification[30];
    cout << "Enter your highest qualification ";
    cin >> Qualification;
    cout << "Highest qualification is "<< Qualification;
}

class D : public B, public C
{
public:
int certificates();
};

int D :: certificates()
{
    int certificate;
    cout << "Number of Certificates who have won in your life" <<endl;
    cin >> certificate;

}

int main()
{
    // For Singular Inheritance
    // A a1;
    // a1.getdata();
    // a1.showdata();
    // B b1;
    // b1.getdata();
    // b1.showdata();
    // b1.showinformation();

    // For Multiple Inheritance
    // A a1;
    // B b1;
    // C c1;
    // c1.getdata();
    // c1.showdata();
    // c1.showinformation();

    // For Multilevel Inheritance
    // A a1;
    // B b1;
    // b1.getdata();
    // b1.showdata();
    // C c1;
    // c1.getdata();
    // c1.showdata();
    // c1.showinformation();

    // // For Hierarchical Inheritance
    // A a1;
    // B b1;
    // b1.getdata();
    // b1.showdata();
    // C c1;
    // c1.getdata();
    // c1.showdata();
    // c1.showinformation();

    // For Hybrid Inheritance
    A a1;
    B b1;
    b1.getdata();
    b1.showdata();
    C c1;
    c1.getdata();
    c1.showdata();
    D d1;
    d1.showinformation();
    d1.certificates();
    return 0;
}