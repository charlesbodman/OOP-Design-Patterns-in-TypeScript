import { BaseComponent } from "./BaseComponent";
import { BaseDecorator } from "./BaseDecorator";

const concreteComponent: BaseComponent = new BaseComponent("Foo");

const decoratedComponent: BaseDecorator = new BaseDecorator("Bar", concreteComponent);

const doubleDecoratedComponent = new BaseDecorator("Zib", decoratedComponent);

console.log(concreteComponent.toString()); // Foo

console.log(decoratedComponent.toString()); // Bar

console.log(doubleDecoratedComponent.toString()); // Zib
