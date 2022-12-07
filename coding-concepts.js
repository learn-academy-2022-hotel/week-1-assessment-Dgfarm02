// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10. 'cohort' is a variable for the string "LEARN 2022"
// the .length is taking that string and counting the total number of characters which comes to 10 including the space.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o. the [4] is denoting the 4th element of the variable 'greeting',
// which is a string "Hello World!". indexes in an array start counting on number 0, so the 4th element would be o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: This one is similar to the one above, but you're using a variable for
// the index instead of calling out which specific element you want. Ruby is in the 2nd position, but the 1st index.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function. toUpperCase can only be used on strings

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: string, string, string, string,
// b) Verify and explain: number. i think this is saying number because that is the datatype that would normally be sent with a .length. it's
// not sending an actual number though because of the typeof command is going to return the type of data not the actual datatype
