import { Duck } from "./Duck";
import { FastFlyBehaviour } from "./FastFlyBehaviour";
import { SlowFlyBehaviour } from "./SlowFlyBehaviour";

/**
 * USAGE
 */
const fastDuck: Duck = new Duck();
fastDuck.setFlyBehavior(new FastFlyBehaviour());
fastDuck.fly();

const slowDuck: Duck = new Duck();
slowDuck.setFlyBehavior(new SlowFlyBehaviour());
slowDuck.fly();

console.log(fastDuck);
console.log(slowDuck);
