abstract class Person{
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    displayInfo(): void{
        console.log(this.name);
    }
}

class Student extends Person{
    id: string;

    constructor(name: string, id: string){
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`id: ${this.id}`);
        super.displayInfo();
    }
}

class Teacher extends Person{
    subject: string;

    constructor(name: string, subject: string){
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Môn học: ${this.subject}`);
        
    }
}

const student = new Student("Kiên12", "A123");
student.displayInfo();
const teacher = new Teacher("Kiên123", "Typescript");
teacher.displayInfo();