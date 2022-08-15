import { Money } from './money';

export class Dollar extends Money {
    constructor(amount: number, currency: string) { 
        super(amount, currency);
    }

    times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier, this.currency);
    }
}