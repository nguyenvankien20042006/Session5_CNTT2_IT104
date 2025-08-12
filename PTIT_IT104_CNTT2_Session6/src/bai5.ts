interface ChangeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(speed: number = 0) {
        this.speed = speed;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tốc độ sau khi tăng: ${this.speed}`);
    }

    slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Tốc độ sau khi giảm: ${this.speed}`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ: ${this.speed}`);
    }
}

const vehicle = new Vehicle();
vehicle.speedUp(50);
vehicle.slowDown(20);
vehicle.stop();
