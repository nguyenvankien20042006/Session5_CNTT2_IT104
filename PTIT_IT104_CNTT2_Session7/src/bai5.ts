class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    public login(): void {
        console.log("Đây là phương thức login của lớp Account");
    }

    public logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        } else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}

class userAcc extends Account {
    public status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    public override login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        } else {
            console.log("Trạng thái tài khoản không hợp lệ");
        }
    }
}

const user1 = new userAcc(1, "kien123", "123456", "user", "active");
const user2 = new userAcc(2, "kien456", "abcdef", "user", "banned");

console.log("---- Kiểm tra user1 ----");
user1.login();
user1.logout();

console.log("\n---- Kiểm tra user2 ----");
user2.login();
user2.logout();
