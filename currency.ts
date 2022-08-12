const isDefined = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

export class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    equals(dollar: unknown): boolean {
        if (!this.isDollar(dollar)) {
            return false;
        }
        
        return dollar.amount === this.amount;
    }

    private isDollar(dollar: unknown): dollar is Dollar {
        return typeof dollar === 'object'
            && isDefined(dollar)
            && isDefined(dollar['amount'])
    }
}