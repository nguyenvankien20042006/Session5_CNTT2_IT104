abstract class Shape{
    protected name: string;

    constructor (name: string){
        this.name = name;
    }

    getname(): string{
        return this.name;
    }

    abstract getSize(): void;
}

class Rectangle extends Shape{
    private width: number;
    private height: number;

    constructor (name: string, width: number, height: number){
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void{
        console.log(`Chiều rộng: ${this.width}, chiều dài: ${this.height}`);
    }
}

const rect = new Rectangle("Hình chữ nhật", 10, 20);
console.log("Tên hình", rect.getname());
rect.getSize();
