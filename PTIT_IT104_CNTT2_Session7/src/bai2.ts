class Vehicle1{
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string){
        this.name = name;;
        this.speed = speed;
        this.id = id;
    }

    slowDown(): void{
        this.speed -= 10;
        if(this.speed < 0){
            this.speed = 0;
        }else{
            console.log(`Tốc độ sau khi giảm là: ${this.speed}`);
        }
    }

    slowUp(): void{
        this.speed += 10;
        console.log(`Tốc độ sau khi tăng là: ${this.speed}`);
    }

    slowSpeed(): void{
        console.log(`Tốc độ hiện tại là: ${this.speed}`);
    }
}

class Bicycle extends Vehicle1{
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number){
        super(name, speed, id);
        this.gear =gear;
    }

    showInfo(): void{
        console.log(`tên xe: ${this.name}, tốc độ: ${this.speed}, id: ${this.id}, số bánh răng ${this.gear}`);
    }
}

const bicycle = new Bicycle("Honda", 10, "A123", 15);
bicycle.showInfo();
bicycle.slowDown();
bicycle.slowUp();
bicycle.slowSpeed();
