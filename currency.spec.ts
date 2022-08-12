import { describe, expect, test } from 'vitest';
import { Dollar } from './currency';

describe('Currency', () => {
    test('multiplication', () => {
        const five = new Dollar(5);
        five.times(2);
        expect(five.amount).toBe(10);
    });
});