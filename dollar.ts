const isDefined = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

const isDollar = (dollar: unknown): dollar is Dollar  => typeof dollar === 'object'
    && isDefined(dollar)
    && 'amount' in dollar;

export class Dollar {
    constructor(private amount: number) { }

    times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    equals(dollar: unknown): boolean {
        if (!isDollar(dollar)) {
            return false;
        }

        return dollar.amount === this.amount;
    }
}