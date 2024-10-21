/**
 * 
 * PRECONDITIONS: input (n) is integer value
 * POSTCONDITIONS: output is sum of values between 10 and n (inclusive)
 * 
 * @param {number} n an input number
 * @return {number} 
 */
function problem1YourName( n ) {
    var sum = 0;
    for (let a = 10; a <= n; a++) {
        sum += a
    }
    return sum;
}

/**
 * 
 * PRECONDITIONS: input (num) is POSITIVE integer value
 * POSTCONDITIONS: output is num if num<5 else 5 + 10*(num-5)
 * 
 * @param {number} num an input number
 * @return {number} 
 */
function problem2YourName( num ) {
    var a = 0;
    while (num != 0) {
        if (num > 5) {
            a+=10;
        } else {
            a++;
        }
        num--;
    }
    return a;
}