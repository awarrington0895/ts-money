const isDefined = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

const isMoney = (money: unknown): money is Money => typeof money === 'object'
    && isDefined(money)
    && 'amount' in money;

export class Money {
    constructor(protected readonly amount: number, protected readonly currency: string) {}

    equals(money: unknown): boolean {
        if (!isMoney(money)) {
            return false;
        }

        return money.amount === this.amount && money.currency === this.currency;
    }
}