import { describe, expect, it, test } from 'vitest';
import { Dollar } from './dollar';

describe('Dollar', () => {
    const usd = 'USD';
    test('multiplication', () => {
        const five = new Dollar(5, usd);

        expect(five.times(2).equals(new Dollar(10, usd))).toBe(true);

        expect(five.times(3).equals(new Dollar(15, usd))).toBe(true);
    });

    test('equality', () => {
        expect(new Dollar(5, usd).equals(new Dollar(5, usd))).toBe(true);
    });

    test('equals should work with object that may not be a dollar', () => {
        expect(new Dollar(5, usd).equals(10)).toBe(false);
    });

    test('simple addition', () => {
        
    });
});