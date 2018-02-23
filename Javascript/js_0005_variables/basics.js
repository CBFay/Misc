function test() {
	// omitting the var keyword makes a global variable
	message = "I'm global!";
}

test();
document.write(message + "<br/>");

/*
 * There are 5 primitive data types in JavaScript:
 * 1) undefined
 * 2) boolean
 * 3) string
 * 4) number
 * 5) object
 * 6) function
 */

// Because typeof is an operator, parentheses are unrequired, but acceptable.
document.write("the data type of message: " + typeof message + "<br/>"); 
document.write("the data type of test: " + typeof test + "<br/>");
