export interface IObserver {
    update(): void;
}

export abstract class Observer implements IObserver {
    public abstract update(): void;
}
