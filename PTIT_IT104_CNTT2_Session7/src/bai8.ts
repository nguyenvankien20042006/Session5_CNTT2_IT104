class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, initialBalance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = status;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp ${amount} vào tài khoản. Số dư: ${this.balance}`);
        } else {
            console.log("Số tiền nạp phải lớn hơn 0");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} từ tài khoản. Số dư: ${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ");
        }
    }

    public showHistory(): void {
        console.log("Lịch sử giao dịch:");
        this.history.forEach((item) => console.log(item));
    }
}

class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, status: string, overdraftLimit: number) {
        super(accountNumber, initialBalance, status);
        this.overdraftLimit = overdraftLimit;
    }

    public override withdraw(amount: number): void {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} từ tài khoản vãng lai. Số dư: ${this.balance}`);
        } else {
            console.log("Vượt quá hạn mức thấu chi");
        }
    }
}

const checkAcc = new CheckingAccount("CA001", 1000, "active", 2000);

checkAcc.deposit(500);   
checkAcc.withdraw(1200);  
checkAcc.withdraw(2000);  
checkAcc.withdraw(500);  
checkAcc.showHistory();
