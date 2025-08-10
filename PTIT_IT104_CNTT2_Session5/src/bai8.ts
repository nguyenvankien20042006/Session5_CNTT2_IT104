8.
class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }

    public setInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
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

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        let found = false;
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setInfo(newTitle, newAuthor);
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }

    public searchBooksByTitle(keyword: string): void {
        let results = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (results.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            results.forEach(book => console.log(book.getInfo()));
        } else {
            console.log(`Không tìm thấy sách nào chứa từ khóa "${keyword}"`);
        }
    }
}

let book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
let book2 = new Book(2, "Tuổi Thơ Dữ Dội", "Phùng Quán");
let book3 = new Book(3, "Lão Hạc", "Nam Cao");
let book4 = new Book(4, "Không Gia Đình", "Hector Malot");
let book5 = new Book(5, "Những Người Khốn Khổ", "Victor Hugo");

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.searchBooksByTitle("Lão");
