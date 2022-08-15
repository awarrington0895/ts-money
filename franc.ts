import { Money } from './money';

export class Franc extends Money {
    constructor(amount: number, currency: string) { 
        super(amount, currency);
    }

    times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier, this.currency);
    }
}