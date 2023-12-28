// #include <iostream>
// #include <conio.h>
// #include <iomanip>
// #include <string.h>
// using namespace std;
// class Y;

// class X
// {
// private:
//     int data;
//     friend void add(X, Y);

// public:
//     void setvalue(int value)
//     {
//         data = value;
//     }
// };

// class Y
// {
// private:
//     int data;
//     friend void add(X, Y);

// public:
//     void setvalue(int value)
//     {
//         data = value;
//     }
// };

// void add(X o1, Y o2)
// {
//     cout << "Suming data of X and Y gives result " << (o1.data + o2.data) << endl;
// }

// int main()
// {
//     X object1;
//     object1.setvalue(4);

//     Y object2;
//     object2.setvalue(5);
//     add(object1, object2);
//     return 0;
// }

#include <iostream>
#include <conio.h>
#include <iomanip>
#include <string.h>
using namespace std;

class c2;

class c1{
    int val1;
    friend void exchange(c1 & , c2 &);
    public:
        void indata(int a){
            val1 = a;
        }

        void display(void){
            cout<< val1 <<endl;
        }
};

class c2{
    int val2;
    friend void exchange(c1 &, c2 &);
    public:
        void indata(int a){
            val2 = a;
        }

        void display(void){
            cout<< val2 <<endl;
        }
};

void exchange(c1 &x, c2 &y){
    int tmp = x.val1;
    x.val1 = y.val2;
    y.val2 = tmp;
}

int main(){
    c1 oc1;
    c2 oc2;

    oc1.indata(34);
    oc2.indata(67);
    exchange(oc1, oc2);

    cout<<"The value of c1 after exchanging becomes: ";
    oc1.display();
    cout<<"The value of c2 after exchanging becomes: ";
    oc2.display();
    
    return 0;
}