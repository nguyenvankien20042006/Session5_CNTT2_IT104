import * as readline from "readline-sync";

// ----------------- LỚP KHÁCH HÀNG -----------------
class Customer {
    private static idCounter = 1;
    public id: number;
    constructor(
        public name: string,
        public email: string,
        public shippingAddress: string
    ) {
        this.id = Customer.idCounter++;
    }
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}

// ----------------- ABSTRACT PRODUCT -----------------
abstract class Product {
    private static idCounter = 1;
    public id: number;
    constructor(
        public name: string,
        public price: number,
        public stock: number
    ) {
        this.id = Product.idCounter++;
    }

    sell(quantity: number): void {
        if (quantity > this.stock) throw new Error("Không đủ hàng trong kho!");
        this.stock -= quantity;
    }
    restock(quantity: number): void {
        this.stock += quantity;
    }
    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

// ----------------- ELECTRONICS PRODUCT -----------------
class ElectronicsProduct extends Product {
    constructor(
        name: string,
        price: number,
        stock: number,
        public warrantyPeriod: number // tháng
    ) {
        super(name, price, stock);
    }
    getProductInfo(): string {
        return `${this.name} - Giá: ${this.price} - Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance: number): number {
        return 50000;
    }
    getCategory(): string {
        return "Đồ điện tử";
    }
}

// ----------------- CLOTHING PRODUCT -----------------
class ClothingProduct extends Product {
    constructor(
        name: string,
        price: number,
        stock: number,
        public size: string,
        public color: string
    ) {
        super(name, price, stock);
    }
    getProductInfo(): string {
        return `${this.name} - Giá: ${this.price} - Size: ${this.size} - Màu: ${this.color}`;
    }
    getShippingCost(distance: number): number {
        return 25000;
    }
    getCategory(): string {
        return "Quần áo";
    }
}

// ----------------- ORDER -----------------
class Order {
    private static idCounter = 1;
    public orderId: number;
    public totalAmount: number = 0;
    constructor(
        public customer: Customer,
        public products: { product: Product, quantity: number }[]
    ) {
        this.orderId = Order.idCounter++;
        this.totalAmount = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
    getDetails(): string {
        let productList = this.products.map(p => `${p.product.name} (x${p.quantity})`).join(", ");
        return `Order ID: ${this.orderId}, Customer: ${this.customer.name}, Total: ${this.totalAmount}, Products: ${productList}`;
    }
}

// ----------------- STORE -----------------
class Store {
    public products: Product[] = [];
    public customers: Customer[] = [];
    public orders: Order[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }
    addCustomer(name: string, email: string, address: string): void {
        this.customers.push(new Customer(name, email, address));
    }
    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
        const customer = this.findEntityById(this.customers, customerId);
        if (!customer) return null;
        const orderItems: { product: Product, quantity: number }[] = [];
        for (let pq of productQuantities) {
            const product = this.findEntityById(this.products, pq.productId);
            if (product && pq.quantity <= product.stock) {
                product.sell(pq.quantity);
                orderItems.push({ product, quantity: pq.quantity });
            } else {
                console.log(`Sản phẩm ID ${pq.productId} không đủ hàng hoặc không tồn tại!`);
            }
        }
        const order = new Order(customer, orderItems);
        this.orders.push(order);
        return order;
    }
    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach(p => p.product.restock(p.quantity));
            this.orders.splice(index, 1);
            console.log("Đã hủy đơn hàng và hoàn trả hàng vào kho.");
        } else {
            console.log("Không tìm thấy đơn hàng!");
        }
    }
    listAvailableProducts(): void {
        this.products.filter(p => p.stock > 0).forEach(p => console.log(p.getProductInfo()));
    }
    listCustomerOrders(customerId: number): void {
        this.orders.filter(o => o.customer.id === customerId)
            .forEach(o => console.log(o.getDetails()));
    }
    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    countProductsByCategory(): void {
        const result = this.products.reduce((acc: { [key: string]: number }, p) => {
            const category = p.getCategory();
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});
        console.log(result);
    }
    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log("Cập nhật tồn kho thành công!");
        } else {
            console.log("Không tìm thấy sản phẩm!");
        }
    }
    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(item => item.id === id);
    }
}

// ----------------- CHƯƠNG TRÌNH MENU -----------------
const store = new Store();
let running = true;

while (running) {
    console.log(`
===== MENU CHỨC NĂNG =====
1. Thêm khách hàng mới
2. Thêm sản phẩm mới (Đồ điện tử / Quần áo)
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị sản phẩm còn hàng
6. Hiển thị đơn hàng của khách hàng
7. Tính tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho
10. Tìm kiếm theo ID (Customer / Product)
11. Xem chi tiết sản phẩm
12. Thoát
`);
    const choice = readline.questionInt("Chọn chức năng: ");
    switch (choice) {
        case 1: {
            const name = readline.question("Tên khách hàng: ");
            const email = readline.question("Email: ");
            const address = readline.question("Địa chỉ: ");
            store.addCustomer(name, email, address);
            break;
        }
        case 2: {
            const type = readline.question("Loại sản phẩm (1. Đồ điện tử, 2. Quần áo): ");
            const name = readline.question("Tên sản phẩm: ");
            const price = readline.questionFloat("Giá: ");
            const stock = readline.questionInt("Số lượng tồn: ");
            if (type === "1") {
                const warranty = readline.questionInt("Bảo hành (tháng): ");
                store.addProduct(new ElectronicsProduct(name, price, stock, warranty));
            } else {
                const size = readline.question("Kích cỡ: ");
                const color = readline.question("Màu sắc: ");
                store.addProduct(new ClothingProduct(name, price, stock, size, color));
            }
            break;
        }
        case 3: {
            const customerId = readline.questionInt("ID khách hàng: ");
            let items: { productId: number, quantity: number }[] = [];
            while (true) {
                const pid = readline.questionInt("ID sản phẩm: ");
                const qty = readline.questionInt("Số lượng: ");
                items.push({ productId: pid, quantity: qty });
                if (readline.question("Thêm sản phẩm khác? (y/n): ") !== "y") break;
            }
            const order = store.createOrder(customerId, items);
            if (order) console.log(order.getDetails());
            break;
        }
        case 4: {
            const oid = readline.questionInt("ID đơn hàng: ");
            store.cancelOrder(oid);
            break;
        }
        case 5: {
            store.listAvailableProducts();
            break;
        }
        case 6: {
            const cid = readline.questionInt("ID khách hàng: ");
            store.listCustomerOrders(cid);
            break;
        }
        case 7: {
            console.log(`Tổng doanh thu: ${store.calculateTotalRevenue()}`);
            break;
        }
        case 8: {
            store.countProductsByCategory();
            break;
        }
        case 9: {
            const pid = readline.questionInt("ID sản phẩm: ");
            const newStock = readline.questionInt("Tồn kho mới: ");
            store.updateProductStock(pid, newStock);
            break;
        }
        case 10: {
            const type = readline.question("Tìm (1. Customer, 2. Product): ");
            const id = readline.questionInt("Nhập ID: ");
            if (type === "1") {
                console.log(store.findEntityById(store.customers, id)?.getDetails() || "Không tìm thấy!");
            } else {
                console.log(store.findEntityById(store.products, id)?.getProductInfo() || "Không tìm thấy!");
            }
            break;
        }
        case 11: {
            const pid = readline.questionInt("ID sản phẩm: ");
            const product = store.findEntityById(store.products, pid);
            if (product) console.log(product.getProductInfo());
            else console.log("Không tìm thấy!");
            break;
        }
        case 12: {
            running = false;
            break;
        }
        default:
            console.log("Chọn sai, thử lại!");
    }
}
