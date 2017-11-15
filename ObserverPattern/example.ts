import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Subject extends Observable {
    constructor() {
        super();
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Listener extends Observer {
    public update(): void {
        console.log("Updated");
    }
}

const subject = new Subject();

const listener = new Listener();

subject.register(listener);

subject.notify(); // Updated

subject.unregister(listener);
