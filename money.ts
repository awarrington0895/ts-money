const isDefined = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

const isMoney = (money: unknown): money is Money => typeof money === 'object'
    && isDefined(money)
    && 'amount' in money;

export class Money {
    constructor(protected readonly amount: number, protected readonly currency: string) { }

    equals(money: unknown): boolean {
        if (!isMoney(money)) {
            return false;
        }

        return money.amount === this.amount && money.currency === this.currency;
    }

    static dollar(amount: number): Dollar {
        return new Dollar(amount, 'USD');
    }

    static franc(amount: number): Franc {
        return new Franc(amount, 'CHF');
    }
}

class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
        return new Franc(this.amount * multiplier, this.currency);
    }
}

class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
        return new Dollar(this.amount * multiplier, this.currency);
    }
}