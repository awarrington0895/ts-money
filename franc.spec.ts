import { test, expect, describe } from 'vitest';
import { Franc } from './franc';

describe('Franc', () => {
    test('francMultiplication', () => {
        const five = new Franc(5);
        expect(five.times(2).equals(new Franc(10))).toBe(true);
        expect(five.times(3).equals(new Franc(15))).toBe(true);
    });
});