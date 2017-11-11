
interface IFlyBehaviour {
    private flySpeed: number;
    fly(): void
}


class FastFlyBehaviour implements IFlyBehaviour {
    fly(): void {
        this.flySpeed += 5;
    }
}


class SlowFlyBehaviour implements IFlyBehaviour {
    fly():void {
        this.flySpeed += 1;
    }
}


class Duck {
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



const fastDuck: Duck = new Duck();
fastDuck.setFlyBehavior(new FastFlyBehaviour());
fastDuck.fly();



const slowDuck: Duck = new Duck();
slowDuck.setFlyBehavior(new SlowFlyBehaviour());
slowDuck.fly();
