namespace StrategyPattern {

    export interface IFlyBehaviour {
        private flySpeed: number;
        fly(): void
    }

    export class FastFlyBehaviour implements IFlyBehaviour {
        fly(): void {
            this.flySpeed += 5;
        }
    }


    export class SlowFlyBehaviour implements IFlyBehaviour {
        fly():void {
            this.flySpeed += 1;
        }
    }


    export class Duck {

        private flyBehaviour: IFlyBehaviour;
        private flySpeed: number;

        constructor() {
            this.flySpeed = 0;
        }

        setFlyBehavior(flyBehaviour: IFlyBehaviour): viod {
            this.flyBehaviour = flyBehaviour;
        }

        fly(): void {
            if (this.flyBehaviour) {
                this.flyBehaviour.fly.apply(this);
            }
        }
    }
}

/**
 * USAGE
 */

const fastDuck: Duck = new StrategyPattern.Duck();
fastDuck.setFlyBehavior(new StrategyPattern.FastFlyBehaviour());
fastDuck.fly();



const slowDuck: Duck = new StrategyPattern.Duck();
slowDuck.setFlyBehavior(new StrategyPattern.SlowFlyBehaviour());
slowDuck.fly();




