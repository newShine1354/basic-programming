//1. Write a program to enter marks of 6 different subjects and find out the total marks. (Using cin and cout statement).
#include<iostream>
#include<conio.h>

using namespace std;

int main()
{
	int sub1, sub2, sub3, sub4, sub5, sub6, total_marks;
	cout << "Enter marks of 6 subjects" << endl;
	cin >> sub1 >> sub2 >> sub3 >> sub4 >> sub5 >> sub6;
	total_marks = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
	cout << "Total marks = " << total_marks;
	return 0;
}
