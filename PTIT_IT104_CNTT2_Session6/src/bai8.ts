class Book {
    constructor(
        private id: number,
        private title: string,
        private author: string,
        private stock: number,
        private status: string
    ) {}

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getStock(): number {
        return this.stock;
    }

    getStatus(): string {
        return this.status;
    }
}

class Member {
    private lendedBooks: LendedBook[] = [];

    constructor(
        private id: number,
        private name: string,
        private contact: string,
        private status: string
    ) {}

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getContact(): string {
        return this.contact;
    }

    getStatus(): string {
        return this.status;
    }

    getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }
}

class LendedBook {
    constructor(
        private memberId: number,
        private bookId: number,
        private dueDate: string
    ) {}

    getMemberId(): number {
        return this.memberId;
    }

    getBookId(): number {
        return this.bookId;
    }

    getDueDate(): string {
        return this.dueDate;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b =>
            console.log(`${b.getId()} - ${b.getTitle()} - ${b.getAuthor()} - SL: ${b.getStock()} - ${b.getStatus()}`)
        );
    }
}

const library = new Library();

const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "Có sẵn");
const book2 = new Book(2, "Học Java cơ bản", "Trần Thị B", 3, "Có sẵn");
const book3 = new Book(3, "Thiết kế Web", "Lê Văn C", 2, "Có sẵn");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();
