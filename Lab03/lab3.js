/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
In this module we write some simple functions in that illustrate
basic logical operations and the use of selection statements (if
and switch).
**/


/**
 * An Example function!
 * Return a string that says hello.
 * @return {string} the string 'hello'.
 */
function hello () {
    return 'hello';
}

/**
 * Test to see if a, b and c are all equal in value
 * @return {boolean} true if all equal, else false
 */
// function allEqual (a, b, c) {
//     /* write your code here! */
//     // if (a == b && b == c && c == a) {
//     //     return true;
//     //     // console.log('true');
//     // } 
//     // else {
//     //     return false;
//     //     // console.log('false');
//     // }
//     return a === b && b === c;
// }
// // allEqual("3","3","3")
// console.log(areAllEqual(5, 10, 5));
// function allEqual(a, b, c, epsilon = 0.000001) {
//     return Math.abs(a - b) < epsilon && Math.abs(b - c) < epsilon;
//   }
  function allEqual(a, b, c) {
    // console.log (a===b && b===c);
    return a === b && b===c;
  }
/**
 * Returns a number between 1 and 6, representing
 * the roll of a loaded die.
 * 
 * The probability of rolling a 1 is 1/10.
 * The probability of rolling a 2 is 1/10.
 * The probability of rolling a 3 is 1/10.
 * The probability of rolling a 4 is 1/10.
 * The probability of rolling a 5 is 1/10.
 * The probability of rolling a 6 is 2/5.
 * 
 * @return {number} a number between 1 and 6
 */
function rollLoadedDie () {
    /* write your code here! */
    const probabilities = [
    // { number: 1, probability: 0.10 },  // 10% chance for 1
    // { number: 2, probability: 0.10 },  // 10% chance for 2
    // { number: 3, probability: 0.10 },  // 10% chance for 3
    // { number: 4, probability: 0.10 },  // 10% chance for 4
    // { number: 5, probability: 0.10 },  // 10% chance for 5
    // { number: 6, probability: 0.40 }   // 40% chance for 6
    // ];
    { number: 1, probability: 0.10 },  // 10% chance for side 1
    { number: 2, probability: 0.20 },  // 10% chance for side 2
    { number: 3, probability: 0.30 },  // 10% chance for side 3
    { number: 4, probability: 0.40 },  // 10% chance for side 4
    { number: 5, probability: 0.50 },  // 10% chance for side 5
    { number: 6, probability: 1 }   // 40% chance for side 6
    
    ];

    // Step 2: Generate a random number between 0 and 1
    const randomNum = Math.random();

    // Step 3: Find the number based on the random number and cumulative probabilities
    for (let i = 0; i < probabilities.length; i++) {
    if (randomNum < probabilities[i].probability) {
        return probabilities[i].number;
    }
    }
    // for i in range(0, number):
    // roll=int(random.randint(1,6))
    // if roll == 1:
    //     one = one+1
    // elif roll == 2:
    //     two = two+1
    // elif roll == 3:
    //     three = three+1
    // elif roll == 4:
    //     four == four+1
    // elif roll == 5:
    //     five = five+1
    // elif roll == 6:
    //     six = six+1
    // return [one,two,three,four,five,six]



}

console.log(rollLoadedDie());

/**
 * Returns a string indicating the most likely
 * animal, given the inputs.
 * 
 * Returns the string "It's a cat" if hasFourLegs and climbsTrees are both true.
 * Returns the string "It's a snake" if hasFourLegs is not true but climbsTrees is.
 * Returns the string "It's a dog" if hasFourLegs is true but climbsTrees is not.
 * Returns the string "It's a fish" if hasFourLegs and climbsTrees are both false.
 * 
 * @param {boolean} hasFourLegs - true if has four legs, else false
 * @param {boolean} climbsTrees - true if climbs rrees, else false
 * @return {string} a string with a guess as to the animal
 */
function guessAnimal (hasFourLegs,climbsTrees) {
    /* write your code here! */
    var cat = "It's a cat";
    var dog = "It's a dog";
    var snake = "It's a snake";
    var fish = "It's a fish";

    // var animal = {cat, dog, snake, fish};

    // var hasFourLegs = {cat, dog}
    // var climbsTrees = {cat, snake}

    if (climbsTrees && hasFourLegs) {
        // console.log(cat)
        return cat;
    }
    else if (climbsTrees && !hasFourLegs) {
        // console.log(snake)
        return snake;
    }
    else if (hasFourLegs && !climbsTrees) {
        // console.log(dog)
        return dog;
    }
    else{
        // console.log(fish)
        return fish;
    }

}

console.log(guessAnimal(false,true))

/**
 * Returns a string indicating the name of the month,
 * given a number between 1 and 12
 * 
 * Returns the string "January" the input is 1,
 * Returns the string "February" the input is 2,
 * and so on.
 * Returns the string "Error" if the input is not a number or not in 
 * the range between 1 and 12.
 * 
 * @param {number} num - the number of the month
 * @return {string} a string with the name of the month
 */
function month (num) {
    /* write your code here! */
    // Step 1: Store the months
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
    // Step 2: Check if the input number is valid (between 1 and 12)
    if (num < 1 || num > 12) {
    return "Invalid month number! Please enter a number between 1 and 12.";
    }

    // Step 3: Return the corresponding month (adjust for zero-based indexing)
    return months[num - 1];

}

console.log(month(5))

/**
 * Returns a boolean indicating if the input year is a leap year.
 * 
 * All leap years are divisible by 4, however
 * No leap years are divisible by 100 unless they are
 * also divisible by 400.
 * 
 * @param {number} year - the year to test
 * @return {boolean} true, if is leap year, else false
 */
function isLeapYear (year) {
    /* write your code here! */
    // //Step 1: Initialize the year
    // // var year = 0; 

    // //Step 2: Check to see if its a leap year
    // if (year / 4 == 0) {
    //     console.log("its leap year")
    // }
    // else if(year / 4 && year / 400){
    //     console.log("its leap year")
    // }
    // else{
    //     console.log("its not leap year")
    // }

    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            if (year % 400 === 0) {
                return true; // It is a leap year
            } else {
                return false; // It is not a leap year
            }
        } else {
            return true; // It is a leap year
        }
        } else {
        return false; // It is not a leap year
        }


}

console.log(isLeapYear(401))

/**
 * Returns a boolean indicating if the input character is a vowel
 * 
 * @param {string} character - a character to test
 * @return {boolean} true, if input is a vowel (upper or lower case); else false.
 */
function isVowel (character) {
    /* write your code here! */

    // Step 1: Check if the input is a single character
    if (typeof character !== 'string' || character.length !== 1) {
        return false; // Return false if the input is invalid
    }
    
    // Step 2: Define a string containing all vowels
    const vowels = 'aeiouAEIOU';

    // Step 3: Check if the character is in the vowels string
    return vowels.includes(character);
}

console.log(isVowel('a'));

/**
 * DO NOT CHANGE THE LINE THAT IS BELOW.
 */
export {  hello, guessAnimal, month, isVowel, isLeapYear, allEqual, rollLoadedDie }

// allEqual("3","3","3")