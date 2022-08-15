import { describe, test, expect } from 'vitest';
import { Money, Franc, Dollar } from './money';

describe('Money', () => {
    const chf = 'CHF';

    test('equality', () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
        expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
        expect(new Franc(5, chf).equals(new Franc(5, chf))).toBe(true);
        expect(new Franc(5, chf).equals(new Franc(6, chf))).toBe(false);
        expect(new Franc(5, chf).equals(Money.dollar(5))).toBe(false);
    });

    test('equals should work with object that may not be a dollar', () => {
        expect(Money.dollar(5).equals(10)).toBe(false);
    });

    describe('Franc', () => {
        test('francMultiplication', () => {
            const five = new Franc(5, chf);
            expect(five.times(2).equals(new Franc(10, chf))).toBe(true);
            expect(five.times(3).equals(new Franc(15, chf))).toBe(true);
        });
    });

    describe('Dollar', () => {
        test('multiplication', () => {
            const five = Money.dollar(5);

            expect(five.times(2).equals(Money.dollar(10))).toBe(true);

            expect(five.times(3).equals(Money.dollar(15))).toBe(true);
        });
    });
});
