namespace ObserverPattern {

    export interface IObservable {
        public register(observer: IObserver): void
        public unregister(observer: IObserver): void
        private notify(): void
    }

    export interface IObserver {
        public update(): void
    }

    export class Observable implements IObservable {

        constructor(parameters) {
            this.observers = [];
        }

        public register(observer: IObserver) {
            this.observers.push(observer);
            return this.unregister.bind(this, observer);
        }

        public unregister(observer: IObserver) {
            const observers = this.observers;
            this.observers = observers.filter((nextObserver) => {
                return observer !== nextObserver
            });
        }

        public notify() {
            const observers = this.observers;
            for (let observer of observers) {
                observer.update();
            }
        }
    }


    export class Observer implements IObserver {

        update() {
            console.log('Notified');
        }

    }

}


const subject = new ObserverPattern.Observable();

const observer = new ObserverPattern.Observer();

const unregisterObserver = subject.register(observer);

subject.notify();

unregisterObserver()

subject.notify();






