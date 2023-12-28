// 2. Write a function using reference variables as arguments to swap the values of pair of integers.
#include <iostream>
#include <conio.h>

using namespace std;
int swap_numbers(int &a, int &b);

int main()
{
	int a, b;
	cout << "Enter two numbers " << endl;
	cin >> a >> b;
	cout << "The value of a is " << a << " and value of b is " << b << endl;
	swap_numbers(a, b);
	cout << "After swaping numbers, the value of a is " << a << " and value of b is " << b << endl;
	return 0;
}

int swap_numbers(int &a, int &b)
{
	int swap;
	swap = a;
	a = b;
	b = swap;
}
