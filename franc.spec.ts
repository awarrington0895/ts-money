import { test, expect, describe } from 'vitest';
import { Dollar } from './dollar';
import { Franc } from './franc';

describe('Franc', () => {
    test('francMultiplication', () => {
        const five = new Franc(5);
        expect(five.times(2).equals(new Franc(10))).toBe(true);
        expect(five.times(3).equals(new Franc(15))).toBe(true);
    });

    test('equals', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
        expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
        expect(new Franc(5).equals(new Franc(5))).toBe(true);
        expect(new Franc(5).equals(new Franc(6))).toBe(false);        
    });
});