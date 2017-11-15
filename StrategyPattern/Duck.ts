import { IFlyBehaviour } from "./IFlyBehaviour";

export class Duck {

    private flyBehaviour: IFlyBehaviour;
    private flySpeed: number;

    constructor() {
        this.flySpeed = 0;
    }

    public setFlyBehavior(flyBehaviour: IFlyBehaviour): void {
        this.flyBehaviour = flyBehaviour;
    }

    public fly(): void {
        if (this.flyBehaviour) {
            this.flyBehaviour.fly.apply(this);
        }
    }
}
