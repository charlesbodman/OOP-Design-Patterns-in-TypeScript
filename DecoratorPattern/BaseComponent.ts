export interface IBaseComponent {
    toString(): void;
}

export class BaseComponent implements IBaseComponent {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public toString() {
        return this.name + " ";
    }
}
