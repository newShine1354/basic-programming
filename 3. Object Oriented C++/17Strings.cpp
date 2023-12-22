#include <iostream>
#include <string.h>
using namespace std;

int main()
{
    char a[] = {'m', 'o', 'n', '\0'}, a1[] = {"day"};
    cout << strcat(a, a1) << endl; // Joins a1 behind a
    cout << strcpy(a, a1) << endl; // Copy a1 to a
    cout << strlen(a) << endl;     // Tell length of string a
    cout << strcmp(a, a1) << endl; // Return 0 if a and a1 are same
    return 0;
}