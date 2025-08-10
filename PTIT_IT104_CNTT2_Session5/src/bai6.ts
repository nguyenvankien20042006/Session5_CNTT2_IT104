6.
class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getInfo(): string {
        return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public viewBooks(): void {
        console.log("📚 Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}

let book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
let book2 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
let book3 = new Book("Lão Hạc", "Nam Cao");
let book4 = new Book("Không Gia Đình", "Hector Malot");
let book5 = new Book("Những Người Khốn Khổ", "Victor Hugo");

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.viewBooks();
