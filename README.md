# Arrays Lab

## Learning Goals

- Practice writing arrays
- Practice using _destructive_ methods to manipulate arrays
- Practice using _nondestructive_ methods to manipulate arrays

## Introduction

We've learned about how arrays work and about the array methods built in to
JavaScript that we can use to manipulate them. Now it's time to practice what
we've learned.

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code.

## Instructions

Open up the indexTest.js file. Note that some of the names of the functions you will be writing begin with destructively and some don't. This is a clue as to which Array method you will need to use for each function.

Note also that the first line asks for an array called cats, set to an initial value of ["Milo", "Otis", "Garfield"]. In your functions, you will be accessing and manipulating this array.

Remember: each time you call to check your function is working, you will need to comment the function call out before working on the next one. The reason we need to do this is because some of your functions will be destructive — they will change the original cats array. This is a problem because it means the input to the remaining functions will be dependent on the outcome of other functions. 

This is also a good illustration of why it's generally good practice to avoid mutating a program's state whenever possible. If we use only nondestructive methods, we have complete control over what's going into and coming out of the function. This makes our programs more robust, easier to maintain, and less prone to bugs.

You will follow this work flow:

-Go function by function.
-Read the comments above each function, vocalize what they're asking you to do.
-Write code; call and console.log your functions/function returns to test they are adjusting the cats array effectively.
-Repeat as needed.