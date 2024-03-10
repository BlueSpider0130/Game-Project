import { BehaviorSubject } from 'rxjs';

export abstract class ReactiveValue<T> {
    private readonly _value$!: BehaviorSubject<T | null>;

    constructor(initialValue: T | null = null) {
        this._value$ = new BehaviorSubject<T | null>(initialValue);
    }

    public get value() {
        return this._value$.value;
    }

    public get valueSafe() {
        if (this.value === null) throw new Error('ReactiveValue is null');
        return this.value;
    }

    public get value$() {
        return this._value$.asObservable();
    }

    public next(value: T | null): void {
        this._value$.next(value);
    }
}
