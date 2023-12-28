#include<iostream>
#include<conio.h>
#include<iomanip>
#include<string.h>
using namespace std;
class Animals
{
    private:
    char Type;
    char Name;
    int Max_age;
    public:
    int getdata();
    int showdata();
};

int Animals :: getdata()
{
    cout<< " What is type of animal ?" << endl;
    cin >> Type;
    cout<< " What is name of animal ?" << endl;
    cin >> Name;
    cout<< " What is max age of animal ?" << endl;
    cin >> Max_age;
}

int main()
{
    Animals a1, a2;
    a1.getdata();
    a1.showdata();
    a2.getdata();
    a2.showdata();
    return 0;
}