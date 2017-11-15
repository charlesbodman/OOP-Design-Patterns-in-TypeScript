import { IFlyBehaviour } from "./IFlyBehaviour";

export class SlowFlyBehaviour implements IFlyBehaviour {
    public flySpeed: number;
    public fly(): void {
        this.flySpeed += 1;
    }
}
