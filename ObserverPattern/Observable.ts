import { IObserver } from "./Observer";

export interface IObservable {
    register(observer: IObserver): void;
    unregister(observer: IObserver): void;
    notify(): void;
}

export abstract class Observable implements IObservable {

    private observers: IObserver[];

    constructor() {
        this.observers = [];
    }

    public register(observer: IObserver): void {
        this.observers.push(observer);
    }

    public unregister(observer: IObserver): void {
        const observers: IObserver[] = this.observers;
        this.observers = observers.filter((nextObserver: IObserver) => {
            return observer !== nextObserver;
        });
    }

    public notify(): void {
        const observers: IObserver[] = this.observers;
        for (const observer of observers) {
            observer.update();
        }
    }

}
