import { describe, it, expect } from "vitest";
import { calcChange, calcCoins, currHour, bits, isPositiveMultipleOf4Or7 } from "lab4"

describe('test of calcChange function in lab4', () => {
    it('when input is 65, should return: 2 quarters', () => {
        expect(calcChange(65)[0]).toBe(2);
    })
    /* you may want to add some other tests! */
})

describe('test of isPositiveMultipleOf4Or7 function in lab4', () => {
    it('when input is 265, should return: false', () => {
        expect(isPositiveMultipleOf4Or7(265)).toBe(false);
    })
    /* you may want to add some other tests! */
})


describe('test of bits function in lab4', () => {
    it('when input is 8, should return: 4', () => {
        expect(bits(8)).toBe(4);
    })
    /* you may want to add some other tests! */
})

describe('test of calcCoins function in lab4', () => {
    it('when input is "quarters" and 265, should return: 10 with 15 cents remaining', () => {
        expect(calcCoins("quarters", 265)[0]).toBe(10);
        expect(calcCoins("quarters", 265)[1]).toBe(15);
    })
    /* you may want to add some other tests! */
})


describe('test of currHour function in lab4', () => {
    it('when input is 127, should return: "2 pm"', () => {
        expect(currHour(127)).toBe("2 pm");
    })
    it('when input is 727, should return: "12 am"', () => {
        expect(currHour(727)).toBe("12 am");
    })    
    /* you may want to add some other tests! */
})

