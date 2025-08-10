class Student{
    id: number;
    age: number;
    email: string;
    
    constructor(id: number, age: number, email: string){
        this.id = id;
        this.age = age;
        this.email = email;
    }

    displayInfo(): void{
        console.log(`Mã sinh viên: ${this.id}`);
        console.log(`Tuổi: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}

const studentlist: Student[] = [];

studentlist.push(new Student(1, 18, "kien@gmail.com"));
studentlist.push(new Student(2, 20, "kien2@gmail.com"));
studentlist.push(new Student(3, 21, "kien3@gmail.com"));

for(const student of studentlist){
    student.displayInfo();
}