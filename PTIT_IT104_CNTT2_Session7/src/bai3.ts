abstract class Animal{
    public name: string;
    
    constructor(name: string){
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void{
        console.log(this.name);
    }
}

class Cat extends Animal{
    makeNoise(): void {
        console.log("Meow meow");
    }
}

class Dog extends Animal{
    makeNoise(): void {
        console.log("Gâu gâu");
    }
}

const cat = new Cat("mèo");
cat.printName();
cat.makeNoise();

const dog = new Dog("chó");
dog.printName();
dog.makeNoise();