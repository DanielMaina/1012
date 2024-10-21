import { describe, it, expect } from "vitest";
import { hello, guessAnimal, month, isVowel, isLeapYear, allEqual, rollLoadedDie } from "lab3"

describe('test of hello function in lab3', () => {
    it('should always return hello', () => {
        expect(hello()).toBe('hello');
    })
})

describe('test of guessAnimal function in lab3', () => {
    it("should return it's a cat", () => {
        expect(guessAnimal(true,true)).toBe("It's a cat");
    })
    /* you may want to try to add some other tests!! */
})


describe('test of isLeapYear function in lab3', () => {
    it("should return true", () => {
        expect(isLeapYear(2064)).toBe(true);
    })
    /* you may want to try to add some other tests!! */
})

describe('test of month function in lab3', () => {
    it("should return Feburary", () => {
        expect(month(2)).toBe("February");
    })
    /* you may want to add some other tests!! */
})

describe('test of isVowel function in lab3', () => {
    it("should return true", () => {
        expect(isVowel("e")).toBe(true);
    })
    it("should return true", () => {
        expect(isVowel("E")).toBe(true);
    })    
    /* you may want to try to add some other tests!! */
})

describe('test of allEqual function in lab3', () => {
    it("should return true", () => {
        expect(allEqual(1,1.0,1)).toBe(true);
    })
    it("should return false", () => {
        expect(allEqual(2,"1",1.0)).toBe(false);
    })
    /* you may want to try to add some other tests!! */
})

describe('test of rollLoadedDie function in lab3', () => {
    let array1 = [];
    for (let i = 0; i < 1000; i++) {
        array1.push(rollLoadedDie()) /* simulate 1000 rolls of the die! */
    }

    let ones = array1.filter(x => x==1).length
    let threes = array1.filter(x => x==3).length
    let sixes = array1.filter(x => x==6).length

    it("should be less than 100", () => {
        expect(Math.abs(ones - 100)).toBeLessThan(100)
    })   
    it("should be less than 100", () => {
        expect(Math.abs(threes - 100)).toBeLessThan(100)
    })   
    it("should be less than 100", () => {
        expect(Math.abs(sixes - 500)).toBeLessThan(100)
    })     
    
})


