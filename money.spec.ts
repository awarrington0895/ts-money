import { describe, test, expect } from 'vitest';
import { Money, Franc, Dollar } from './money';

describe('Money', () => {
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

    describe('Dollar', () => {
        test('multiplication', () => {
            const five = Money.dollar(5);

            expect(five.times(2).equals(Money.dollar(10))).toBe(true);

            expect(five.times(3).equals(Money.dollar(15))).toBe(true);
        });

        test('equality', () => {
            expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
        });

        test('equals should work with object that may not be a dollar', () => {
            expect(Money.dollar(5).equals(10)).toBe(false);
        });
    });
});
