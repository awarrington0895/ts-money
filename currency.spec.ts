import { describe, expect, it, test } from 'vitest';
import { Dollar } from './currency';

describe('Currency', () => {
    test('multiplication', () => {
        const five = new Dollar(5);

        let product = five.times(2);

        expect(product.amount).toBe(10);

        product = five.times(3);

        expect(product.amount).toBe(15);
    });

    test('equality', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    });

    test('equals should work with object that may not be a dollar', () => {
        expect(new Dollar(5).equals(10)).toBe(false);
    });
});