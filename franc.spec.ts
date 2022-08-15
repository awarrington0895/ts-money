import { describe, expect, test } from 'vitest';
import { Dollar } from './dollar';
import { Franc } from './franc';

describe('Franc', () => {
    const usd = 'USD';
    const chf = 'CHF';
    test('francMultiplication', () => {
        const five = new Franc(5, chf);
        expect(five.times(2).equals(new Franc(10, chf))).toBe(true);
        expect(five.times(3).equals(new Franc(15, chf))).toBe(true);
    });

    test('equals', () => {
        expect(new Dollar(5, usd).equals(new Dollar(5, usd))).toBe(true);
        expect(new Dollar(5, usd).equals(new Dollar(6, usd))).toBe(false);
        expect(new Franc(5, chf).equals(new Franc(5, chf))).toBe(true);
        expect(new Franc(5, chf).equals(new Franc(6, chf))).toBe(false);
        expect(new Franc(5, chf).equals(new Dollar(5, usd))).toBe(false);
    });
});