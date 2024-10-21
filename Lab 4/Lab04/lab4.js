/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
In this module we write some functions in that illustrate the use of loops (for
and while). We will also tie the execution of one function to the HTML DOM!
**/

//console.log(calcChange(100)) //uncomment this line if you'd like to run calcChange with Node, at the command line!

/**
 * An example of a function that interacts with the DOM!
 * The function below should tie the execution of your algorithms
 * to interactions with elements in your HTML.
 * Once you have completed the lab, this should 
 * allow you to run your code within the browser!
 */
function activateButton(){
    const button = document.getElementById('submit');
    button.addEventListener('click', function() {
        let value = document.getElementById('algorithm').value;
        let output = "";
        let number = document.getElementById('input').value;
        number = parseInt(number);
        if (value == "calcChange") {
            [countQ, countD, countN, remainder] = calcChange(number);
            output =  "To make " + number.toString() + " cents out of quarters, dimes and nickels, use:\n";
            output += countQ.toString() + " Quarter(s), ";
            output += countD.toString() + " Dime(s), and ";
            output += countN.toString() + " Nickel(s).\n";
            output += remainder.toString() + " cent(s) will remain.";            
        }
        else if (value == "isPositiveMultipleOf4Or7") output = number.toString() + " is a positive multiple of 4 or 7: " + isPositiveMultipleOf4Or7(number).toString();
        else if (value == "currHour") output = number.toString() + " minutes after noon the hour is: " + currHour(number).toString();
        else if (value == "bits") output = number.toString() + " requires " + bits(number).toString() + " bits in binary.";
        document.getElementById('output').innerText = output;
    } );
}
  
/**
 * Accepts a number of cents and returns an array of numbers.
 * The first element in the array is the maximum number of Quarters that 
 * can be found in the number of cents.
 * The second element in the array is the maximum number of Dimes that 
 * can be found in the number of cents, after the Quarters have been accounted for.
 * The third element in the array is the maximum number of Nickles that 
 * can be found in the number of cents, after the Quarters and Dimes have been accounted for.
 * The final element is the number of cents that will remain, after 
 * Quarters, Nickels and Dimes have been accounted for.
 * For example, if the input is 65, the output should be:
 * [2,1,1,0]
 * This is because 65 cents can be formed with 2 quarters, 1 dime and 1 nickel.
 * After accounting for these coins, 0 cents will remain.
 * 
 * Note that you will want to use your calcCoins function as a sub-algorithm here!
 * 
 * Precondition: input number is a positive integer
 * 
 * @param {number} n - input number of Cents (a positive integer)
 * @return {number[]} an array of Quarters, Dimes, Nickels and any remaining Cents.
 */
function calcChange( number ) {
    /* write your code here! */
    let quarters = Math.floor(number / 25);
    number = number % 25; // Remaining cents after quarters are counted

    // Calculate the number of dimes (10 cents)
    let dimes = Math.floor(number / 10);
    number = number % 10; // Remaining cents after dimes are counted

    // Calculate the number of nickels (5 cents)
    let nickels = Math.floor(number / 5);
    number = number % 5; // Remaining cents after nickels are counted

    // Remaining cents after all coins are counted
    let remaining = number;

    // Return the result as an array: [quarters, dimes, nickels, remaining]
    return [quarters, dimes, nickels, remaining];
}
// console.log(calcChange(65))
/**
 * Returns true if the input is a multiple of 4 or 7, else false
 * 
 * Precondition: input is a positive integer
 * 
 * @param {number} n - input number (a positive integer)
 * @return {boolean} true if input is multiple of 4 or 7, else false.
 */
function isPositiveMultipleOf4Or7(n) {   
    /* write your code here! */
    // Check if number is positive
    if (n <= 0) {
        return false; // If the number is not positive, return false immediately
    }

    // Loop to check if the number is a multiple of 4
    let multipleOf4 = 0;
    while (multipleOf4 <= n) {
        if (multipleOf4 === n) {
            return true; // Return true if the number is a multiple of 4
        }
        multipleOf4 += 4; // Increment by 4 in each iteration
    }

    // Loop to check if the number is a multiple of 7
    let multipleOf7 = 0;
    while (multipleOf7 <= n) {
        if (multipleOf7 === n) {
            return true; // Return true if the number is a multiple of 7
        }
        multipleOf7 += 7; // Increment by 7 in each iteration
    }

    // If the number is not a multiple of 4 or 7, return false
    return false;
}
// console.log(isPositiveMultipleOf4Or7(28));
// console.log(isPositiveMultipleOf4Or7(9));

/**
 * Returns the number of bits required to represent the input number
 * 
 *  Precondition: input is a positive integer
 * 
 * @param {number} number - input number (a positive integer)
 * @return {number} the number of bits required to represent the input.
 */
function bits(number) {
    /* write your code here! */
    let bitCount = 0;  // Initialize the counter to track bits
    
    // Loop until the number is reduced to 0
    while (number > 0) {
        number = Math.floor(number / 2); // Divide the number by 2
        bitCount += 1; // Increment the bit counter
    }
    
    return bitCount;
}
// console.log(bits(8)); 

/**
 * Return a string that indicates the hour of the day, 
 * assuming that elapsedMinutes have passed since noon. 
 * For example, if the input is 127, the output should be "2 pm" 
 * as two hours will have elapsed since noon and so the current 
 * hour will be 2. if the input is 727, the output should be "12 am" 
 * as 12 hours will have elapsed since noon and so the current hour 
 * will be 12 a.m.
 * 
 * The output string should be of the form "X am" or "X pm",
 * where X is an integer between 1 and 12.
 * 
 * Precondition: elapsedMinutes is a positive integer
 * 
 * @param {number} elapsedMinutes - input minutes (a positive integer)
 * @return {string} output string in the form "X am" or "X pm", where X is between 1 and 12.
 */
function currHour(elapsedMinutes) {
    /* write your code here! */
    let totalHours = 0;

    // Use a loop to simulate time passage in hours (increment by 60 minutes for each hour)
    while (elapsedMinutes >= 60) {
        elapsedMinutes -= 60; // Subtract 60 minutes for every hour that passes
        totalHours += 1; // Increment the hour count
    }

    // Calculate the hour in a 12-hour format
    let hoursAfterNoon = totalHours % 12; // Get the remainder when divided by 12 (12-hour clock)
    let isPM = totalHours >= 12; // If more than 12 hours, it's PM

    // Special case: if hoursAfterNoon is 0, it should be 12
    if (hoursAfterNoon === 0) {
        hoursAfterNoon = 12;
    }

    // Determine AM or PM based on total hours passed
    let period = isPM ? 'pm' : 'am';

    // Return the formatted result as "hour am/pm"
    return hoursAfterNoon + ' ' + period;
}
// console.log(currHour(127));
// console.log(currHour(727));

/**
 * Accepts a number of cents and a denomination as input.
 * Returns the number of quarters, nickels or dimes that can be represented by the input, 
 * and the number of remaining cents. For example, if the input denomination is "nickels" 
 * and the input cents is 33, the outputs should be 6 (as 6 nickels = 30 cents) and 3 (as
 * 3 cents will remain). 
 * 
 * Precondition: cents is a positive integer and denomination is a string
 * that is either "quarters", "dimes" or "nickels"
 * 
 * @param {number} denomination - input minutes (a positive integer)
 * @param {number} cents - input cents to be converted into the denomination (a positive integer)
 * @return {number []} the number coins with the given denomination that can fit in the input cents, and the number of remaining cents
 */
function calcCoins(denomination, cents) {
    /* write your code here! */
    let coinValue;
    
    // Selection statement to set coin value based on the denomination
    if (denomination === "quarters") {
        coinValue = 25;
    } else if (denomination === "dimes") {
        coinValue = 10;
    } else if (denomination === "nickels") {
        coinValue = 5;
    } else {
        throw new Error("Invalid denomination"); // Handle invalid input
    }
    
    let numberOfCoins = 0;

    // Loop to subtract the coin value from the total cents
    while (cents >= coinValue) {
        cents -= coinValue;  // Subtract the coin value from the total
        numberOfCoins += 1;  // Increment the number of coins
    }
    
    // Return the number of coins and the remaining cents
    return [numberOfCoins, cents];
}
// console.log(calcCoins("nickels", 33));
// console.log(calcCoins("quarters", 80)); 

//uncomment the line below to run the lab4 functions with vitest!!
//comment our the line below to run the lab4 functions within your HTML.
export { calcChange, calcCoins, bits, currHour, isPositiveMultipleOf4Or7 }
