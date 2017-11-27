// from Cherno's intro to game engine's in C++

#include <iostream> // anything with a hash is called a pre-processor, because it happens at compile time.
#define WIDTH 800 // replaces every instance of WIDTH with 800
#define METHOD int main() // would let you replace "int main()" with "METHOD"

#define DEBUG 1

#if DEBUG
	#define LOG(x) std::cout << x << std::endl
#else
	#define LOG(x)
#endif

int main()
{
	unsigned int a = 1; // unsigned ints can't be negative_sign // 4-bytes
	float f = 1.0f // 4 bytes
	double d = 0.0f // 8 bytes

#if 1 // if true, this code will be included in the compilation
	std::cout << sizeof(int) << std::endl;  // tells you the size of the data type specified in bytes
#endif
	
	std::cout << "Hello World!" << std::endl;
	system("PAUSE");
	return 0; // return the exit type
}
