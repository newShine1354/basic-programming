#include <iostream>
using namespace std;

int main()
{
    int marks[4] = {34, 45, 56, 30};
    int mathsmarks[4];
    mathsmarks[0] = 76;
    mathsmarks[1] = 56;
    mathsmarks[2] = 49;
    mathsmarks[3] = 80;
    cout << "These are mathsmarks" << endl;
    cout << mathsmarks[0] << endl;
    cout << mathsmarks[1] << endl;
    cout << mathsmarks[2] << endl;
    cout << mathsmarks[3] << endl;

    cout << "These are marks" << endl;
    marks[2] = 55; // You the reinitialize the value of an is_array.
    // cout << marks[0] << endl;
    // cout << marks[1] << endl;
    // cout << marks[2] << endl;
    // cout << marks[3] << endl;

    // for (int i = 0; i < 4; i++)
    // {
    //     cout << "The value of marks" << i << " is " << marks[i] << endl;
    // }

    // Quick Quiz : Do the same using while and dowhile loop.
    // int i = 0;
    // while (i < 4)
    // {
    //     cout << "The value of marks" << i << " is " << marks[i] << endl;
    //     i++;
    // }

    // int i = 0;
    // do
    // {
    //     cout << "The value of marks" << i << " is " << marks[i] << endl;
    //     i++;

    // } while (i < 4);

    // Pointer and Arrays
    int *p = marks;
    cout << p << endl;
    cout << *(p++) << endl;
    cout << *(p) << endl;
    cout << p << endl;
    cout << "The value of marks[0] is " << *(p) << endl;
    cout << "The value of marks[1] is " << *(p + 1) << endl;
    cout << "The value of marks[2] is " << *(p + 2) << endl;
    cout << "The value of marks[3] is " << *(p + 3) << endl;

    // Pointer Arthematic
    // New address = (Current address + i) * sizeof(datatype)
    // (marks+i) = (marks + i) * sizeof(datatype) ;

    return 0;
}