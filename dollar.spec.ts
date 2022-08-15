import { describe, expect, it, test } from 'vitest';
import { Dollar } from './dollar';

describe('Dollar', () => {
    test('multiplication', () => {
        const five = new Dollar(5);

        expect(five.times(2).equals(new Dollar(10))).toBe(true);

        expect(five.times(3).equals(new Dollar(15))).toBe(true);
    });

    test('equality', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    });

    test('equals should work with object that may not be a dollar', () => {
        expect(new Dollar(5).equals(10)).toBe(false);
    });

    test('simple addition', () => {
        
    });
});