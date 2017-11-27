// from Cherno's intro to game engine's in C++

#include <iostream>
#define DEBUG 1

#if DEBUG
	#define LOG(x) std::cout << x << std::endl
#else
	#define LOG(x)
#endif

// functions and variables can only be private within a class.


int add(int a, int b) 
{
	return a + b;
}

void increment(int *value) // including this pointer allows you to actually affect the data passed as an argument
// it becomes pass by reference instead of pass by value
{
	(*value)++; // using parentheses assures that we de-reference before incrementing
} // this is messy


void increment_reference(int& value) // a much cleaner pass by reference
{
	value++;
} // pass by reference if you need to modify a value, or just read it.
// pass by value when we want to modify a value, but not make the modification apply to the original variables


int main()
{
	int a = 5;
	int* p = &a; // pointer to the memory address of a
	LOG(p);
	LOG(*p); // this is called de-referencing. It would print the data at the address
	system("PAUSE");
	return 0;
}
