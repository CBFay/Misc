/* The ECMAScript Number type uses the IEEE-754 format
 * to represent both integers and floating-point values */

var intNum = 107; // integer

/* declare an octal number by preceding a valid
 * sequence of octal digits with a 0. */

var octalNum = 057;
var octalNum = 099; // interpreted as decimal
// octal values are invalid when running in strict mode.

// Hexidecimal numbers are declared in a similar manner:
var hexNum = 0xA3B;

/* Numbers created using octal or hex format are treated as
 * decimal numbers in all arithmetic operations. */

/* Floating point values must include a decimal point that's
 * preceded by at least one number. */

var floatNum = 0.2;
var floatNum2 = .2; // valid, but not recommended

/* Because floating point values use twice as much memory as integer
 * values, ECMAScript is always looking for ways to convert values
 * into integers. When there is no number after the decimal point, the number
 * being represented will be converted into an integer. */

/* For very large or very small numbers, floating point values can be represented
 * using "e-notation", which indicates that that a number should be multiplied by
 * 10 raised to the given power. */

var bigFloat = 49e4;
var smallFloat = 49e-4;

/* Floating point values are accurate up to 17 decimal paces, but far less
 * accurate in arithmetic computations than whole numbers. Be cautious when
 * comparing float equality. You should never test for specific floating-point
 * values. */

// The biggest and smallest numbers that can be represented in ECMAScript:
var big = Number.MAX_VALUE;
var small = Number.MIN_VALUE;

/* If a number cannot be represented in JavaScript's numeric range
 * it is given the special value of Infinity or -Infinity, and cannot
 * be used in further calculations. */

var test = isFinite(Number.MAX_VALUE * 2); // false
