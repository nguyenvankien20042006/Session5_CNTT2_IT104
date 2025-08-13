class Employee{
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void{
        console.log(`Tên nhân viên: ${this.name}, công ty: ${this.company}, số điện thoại: ${this.phone}`);
    }
}

class Manager extends Employee{
    public teamSize: string;

    constructor(name: string, company: string, phone: string, teamSize: string){
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    public printInfo(): void {
        super.printInfo();
        console.log(`Số lượng thành viên: ${this.teamSize}`);
    }
}

const emp = new Employee("Nguyễn Văn Kiên", "rikkei", "01234456");
emp.printInfo();
const mng = new Manager("Nguyễn Văn Kiên", "rikkei", "01234556", "34");
mng.printInfo();
