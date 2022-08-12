const isDefined = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

const isFranc = (franc: unknown): franc is Franc  => typeof franc === 'object'
    && isDefined(franc)
    && isDefined(franc['amount']);

export class Franc {
    constructor(private amount: number) { }

    times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier);
    }

    equals(franc: unknown): boolean {
        if (!isFranc(franc)) {
            return false;
        }

        return franc.amount === this.amount;
    }
}