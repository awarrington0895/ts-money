const isDefined = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

export class Franc {
    constructor(private amount: number) { }

    times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier);
    }

    equals(franc: unknown): boolean {
        if (!this.isFranc(franc)) {
            return false;
        }

        return franc.amount === this.amount;
    }

    private isFranc(franc: unknown): franc is Franc {
        return typeof franc === 'object'
            && isDefined(franc)
            && isDefined(franc['amount'])
    }
}