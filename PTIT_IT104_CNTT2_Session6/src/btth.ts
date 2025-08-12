class Student {
  name: string;
  age: number;
  id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

class Classroom {
  students: Student[];
  allStudents: Student[];

  constructor() {
    this.students = [];
    this.allStudents = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.allStudents.push(student);
  }

  removeStudent(id: number) {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      const removed = this.students.splice(index, 1)[0];
      this.allStudents.push(removed);
    }
  }

  editStudent(id: number, newName: string, newAge: number) {
    const student = this.students.find(s => s.id === id);
    if (student) {
      student.name = newName;
      student.age = newAge;
    }
  }

  showStudents() {
    console.log("Danh sách học sinh hiện tại:");
    this.students.forEach(s => {
      console.log(`ID: ${s.id}, Tên: ${s.name}, Tuổi: ${s.age}`);
    });
  }
}

const class1 = new Classroom();
const student1 = new Student("Nam", 18, 1);
const student2 = new Student("Lan", 17, 2);

class1.addStudent(student1);
class1.addStudent(student2);
class1.showStudents();

class1.removeStudent(1);
class1.showStudents();

class1.editStudent(2, "Lan Edited", 18);
class1.showStudents();
