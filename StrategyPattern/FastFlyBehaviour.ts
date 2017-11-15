import { IFlyBehaviour } from "./IFlyBehaviour";

export class FastFlyBehaviour implements IFlyBehaviour {
    public flySpeed: number;
    public fly(): void {
        this.flySpeed += 5;
    }
}
