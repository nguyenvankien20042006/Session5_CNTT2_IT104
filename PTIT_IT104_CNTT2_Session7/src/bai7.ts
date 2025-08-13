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

class SavingAccount extends Account {
    public interestRate: number;

    constructor(accountNumber: string, initialBalance: number, status: string, interestRate: number) {
        super(accountNumber, initialBalance, status);
        this.interestRate = interestRate;
    }

    public override withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            if (this.balance < 0) this.balance = 0;
            this.history.push(`Rút ${amount} từ tài khoản tiết kiệm. Số dư: ${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư");
        }
    }
}

const savingAcc = new SavingAccount("TK001", 5000, "active", 0.05);

savingAcc.deposit(2000);
savingAcc.withdraw(3000);
savingAcc.withdraw(4000);
savingAcc.showHistory();
