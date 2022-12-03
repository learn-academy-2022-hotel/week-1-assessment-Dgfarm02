// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is
// below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below.

// Pseudo code:
// Function Signature
// input: number
// output: string indicating below boiling point, at boiling point, or above boiling point

// input: 42
// output: below boiling point

// input: 350
// output: above boiling point

// input: 212
// output: at boiling point

//Process
// create a function called boilingPoint that takes in a number called liquidTemp
// if liquidTemp is less than 212 return "below boiling point"
// if liquidTemp is more than 212 return "above boiling point"
// if liquidTempis exactly 212 return "at boiling point"
// any other input return "error"

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (liquidTemp) => {
  if (liquidTemp > 212){
    return `${liquidTemp} is above boiling point.`
  } else if (liquidTemp < 212) {
    return `${liquidTemp} is below boiling point`
  } else if (liquidTemp === 212) {
    return `${liquidTemp} is at boiling point`
  } else {
    return "error"
  }
}

// console.log(boilingPoint(temp1))
// Expected output: "42 is below boiling point"
// console.log(boilingPoint(temp2))
// Expected output: "350 is above boiling point"
// console.log(boilingPoint(temp3))
// Expected output: "212 is at boiling point"
// console.log(boilingPoint("cheeseburger"))
// Expected output: "error"






// --------------------2) Create the code that will combine the two arrays and return the length using
// the test variables provided below.

// Pseudo code:
// Function Signature
// input: two arrays (padres1984WorldSeriesRuns, and padres1998WorldSeriesRuns)
// output: the length of both arrays combined

// input: [2, 5, 2, 2, 4] and [6, 3, 5, 3]
// output: 9

// Process
// create a new array that concats the arrays given by the instructor
// log the length of the new array


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

const newArray = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))

console.log(newArray.length)
// output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// create an array called hotelArray using the currentCohort.split accessor
// use the .reverse accessor to reverse the direction of the elements in the arrays
// use the .join accessor to convert the array back to a strings
// return the "Hotel 2022" string with the characters in reverse order

const currentCohort = "Hotel 2022"
const hotelArray = (currentCohort.split(""))
const reverseArray = (hotelArray.reverse())
console.log(reverseArray.join(""))
// output: "2202 letoH"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Function Signature

// log where in the array the 'givenValue' appears for the last time

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1))
// output: 7


const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))
// output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// sort all of the numbers in the given array from largest to smallest
// log the array showing the new order

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
sanDiegoSummerTemperatures.sort((b, a) => a - b)
console.log(sanDiegoSummerTemperatures)
// output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoWinterTemperatures.sort((b, a) => a - b)
console.log(sanDiegoWinterTemperatures)
// output: [68, 67, 66, 66, 62, 59, 59]
