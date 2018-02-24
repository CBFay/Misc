// Commonly used properties of Arrays

// an exemplary function
function print(item) {
    document.write(item, "<br />");
}

// declaration
var numbers = [3, 5, 4, 9, 0, 7];
var test = Array(5, 6, 7);

// append to the end of the array, return the new length
numbers.push(8);

// remove and return the last element
numbers.pop();

// remove and return the first element
numbers.shift();

// add one or more elements to the beginning of the array,
// returns the new length
numbers.unshift(2);

// return the index of the given element, or -1 if it's not present
numbers.indexOf(7);

// from an index, remove a given number of elements, and optionally replace them.
numbers.splice(0, 2, 1, 2, 3);
// "remove 2 elements at index 0, and add in 1, 2, and 3."

// how to remove a single element
numbers.splice(0, 1);

// return a shallow copy of a portion of the array
numbers.slice();

// an unusual way to remove elements
numbers.length = 4;

// if the lenth is increasing, undefined elements will be pushed.
numbers.length = 9;

// return all elements of an array joined as a string with a seperator
numbers.join(", ");

// apply the given function to each element
numbers.forEach(print);


Array.from("example");
// Creates a new Array instance from an array-like or iterable object.

Array.isArray("example");
// Returns true if a variable is an array, if not false.

Array.of("example");
/* Creates a new Array instance with a variable number of arguments,
 * regardless of number or type of the arguments. */


/* Any JavaScript property whose name begins with a digit (string or number)
 * must be referenced with square-bracket notation; this is not unique to arrays. */


