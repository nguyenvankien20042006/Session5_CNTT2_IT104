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

    setName(name: string): void {
        this.name = name;
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

    removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}

allStudents.push(
    new Student(1, "Kiên1"),
    new Student(2, "Kiên2"),
    new Student(3, "Kiên3"),
    new Student(4, "Kiên4"),
    new Student(5, "Kiên5"),
    new Student(6, "Kiên6")
);

const classA = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

console.log("Lớp A ban đầu:");
classA.showStudents();

classA.editStudent(2, "Kiên7");
classA.removeStudent(3);

console.log("Lớp A sau khi sửa và xóa:");
classA.showStudents();

console.log("Danh sách allStudents sau khi xóa từ lớp A:");
allStudents.forEach(s => console.log(`${s.getId()} - ${s.getName()}`));
