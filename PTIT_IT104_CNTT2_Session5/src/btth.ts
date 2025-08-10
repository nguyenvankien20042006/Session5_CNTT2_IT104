class Animal {
  private name: string;
  protected age: number;
  public species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string): void {
    this.name = newName;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(newAge: number): void {
    if (newAge >= 0) {
      this.age = newAge;
    }
  }

  public speak(): void {
    console.log(`${this.species} phát ra âm thanh.`);
  }

  public showInfo(): void {
    console.log(`Tên: ${this.getName()}, Tuổi: ${this.getAge()}, Loài: ${this.species}`);
  }
}

class Dog extends Animal {
  public breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Chó");
    this.breed = breed;
  }

  public speak(): void {
    console.log("Gâu gâu");
  }

  public showInfo(): void {
    super.showInfo();
    console.log(`Giống: ${this.breed}`);
  }
}

class Cat extends Animal {
  public breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Mèo");
    this.breed = breed;
  }

  public speak(): void {
    console.log("Meo meo");
  }

  public showInfo(): void {
    super.showInfo();
    console.log(`Giống: ${this.breed}`);
  }
}

class Rabbit extends Animal {
  public breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Thỏ");
    this.breed = breed;
  }

  public speak(): void {
    console.log("Chít chít");
  }

  public showInfo(): void {
    super.showInfo();
    console.log(`Giống: ${this.breed}`);
  }
}

const dog1 = new Dog("Buddy", 3, "Golden Retriever");
const cat1 = new Cat("Kitty", 2, "Ba Tư");
const rabbit1 = new Rabbit("Bunny", 1, "Hà Lan");

console.log("=== Thông tin chó ===");
dog1.showInfo();
dog1.speak();

console.log("\n=== Thông tin mèo ===");
cat1.showInfo();
cat1.speak();

console.log("\n=== Thông tin thỏ ===");
rabbit1.showInfo();
rabbit1.speak();

dog1.setAge(4);
cat1.setName("Mimi");
rabbit1.breed = "Mini Rex";

console.log("\n=== Thông tin sau cập nhật ===");
dog1.showInfo();
cat1.showInfo();
rabbit1.showInfo();
