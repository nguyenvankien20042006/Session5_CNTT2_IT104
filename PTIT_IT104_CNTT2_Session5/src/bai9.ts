class Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getYear(): number {
        return this.year;
    }

    public setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    public setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }

    public setYear(newYear: number): void {
        this.year = newYear;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public viewBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    public deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách có ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        let found = false;
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                book.setYear(newYear);
                found = true;
                console.log(`Đã cập nhật sách có ID ${id}`);
                break;
            }
        }
        if (!found) {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}

// Tạo sách
let book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
let book2 = new Book(2, "Tuổi Thơ Dữ Dội", "Phùng Quán", 1988);
let book3 = new Book(3, "Lão Hạc", "Nam Cao", 1943);
let book4 = new Book(4, "Không Gia Đình", "Hector Malot", 1878);
let book5 = new Book(5, "Những Người Khốn Khổ", "Victor Hugo", 1862);

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log("=== Trước khi cập nhật và xóa ===");
library.viewBooks();

library.updateBookById(3, "Lão Hạc (Bản Mới)", "Nam Cao", 2020);
library.deleteBookById(2);

console.log("=== Sau khi cập nhật và xóa ===");
library.viewBooks();
