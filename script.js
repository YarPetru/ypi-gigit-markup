// //  - - - - 1
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let count = 1;
// let string = "";

// while (count <= 7) {
//   string += "#";
//   count += 1;
//   console.log(string);
// }

// // - - - - - - 2
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).

// let printingNumber;

// for (i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     printingNumber = "FizzBuzz";
//   } else if (i % 3 === 0) {
//     printingNumber = "Fizz";
//   } else if (i % 5 === 0) {
//     printingNumber = "Buzz";
//   } else {
//     printingNumber = i;
//   }
//   console.log(printingNumber);
// }

// - - - - - - 3
// \n

// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.

let sideLength = 8;
let string = "";

for (i = 1; i <= sideLength; i += 1) {
  for (j = 1; j <= sideLength; j += 1)
    if ((i + j) % 2 === 0) {
      string += "#";
    } else {
      string += " ";
    }
  string += "\n";
}
console.log(string);
