import { describe, expect, test } from 'vitest';
import { Money } from './money';

describe('Money', () => {
    test('equality', () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
        expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
        expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
        expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
        expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
    });

    test('equals should work with object that may not be a dollar', () => {
        expect(Money.dollar(5).equals(10)).toBe(false);
    });

    describe('Franc', () => {
        test('francMultiplication', () => {
            const five = Money.franc(5);

            expect(five.times(2).equals(Money.franc(10))).toBe(true);

            expect(five.times(3).equals(Money.franc(15))).toBe(true);
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
