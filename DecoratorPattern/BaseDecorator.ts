import { IBaseComponent } from "./BaseComponent";

export class BaseDecorator implements IBaseComponent {

    private component: IBaseComponent;

    private name: string;

    constructor(name: string, component: IBaseComponent) {
        this.name = name;
        this.component = component;
    }

    public toString(): string {
        return this.component.toString() + this.name + " ";
    }
}
