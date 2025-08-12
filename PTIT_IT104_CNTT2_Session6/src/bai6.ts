class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

const allStudents: Student[] = [];

class Classroom {
    private students: Student[] = [];

    showStudents(): void {
        console.log("Danh sách học sinh:");
        this.students.forEach(s => console.log(`${s.getId()} - ${s.getName()}`));
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}

allStudents.push(
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Chi"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Khánh")
);

const classA = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

const classB = new Classroom();
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("Lớp A:");
classA.showStudents();
console.log("Lớp B:");
classB.showStudents();

console.log("Danh sách học sinh còn lại:", allStudents.length);
