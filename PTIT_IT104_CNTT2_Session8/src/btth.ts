class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public year: number
    ) {}
}

class EBook extends Book {
    constructor(
        id: number,
        title: string,
        author: string,
        year: number,
        public fileSize: number
    ) {
        super(id, title, author, year);
    }
}

class Library<T extends Book> {
    private books: T[] = [];

    addBook(book: T): void {
        this.books.push(book);
    }

    getBookById(id: number): T | undefined {
        return this.books.find(book => book.id === id);
    }

    removeBook(id: number): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    updateBook(id: number, updatedBook: T): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }

    listBooks(): T[] {
        return this.books;
    }

    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    getTotalBooks(): number {
        return this.books.length;
    }

    findBooksByYear(year: number): T[] {
        return this.books.filter(book => book.year === year);
    }
}

const myLibrary = new Library<Book>();

myLibrary.addBook(new Book(1, "Lập trình C++", "Nguyễn Văn A", 2020));
myLibrary.addBook(new Book(2, "Học TypeScript", "Trần Thị B", 2021));
myLibrary.addBook(new Book(3, "JavaScript cơ bản", "Lê Văn C", 2020));

console.log("Danh sách sách:", myLibrary.listBooks());

console.log("Tìm sách ID 2:", myLibrary.getBookById(2));

myLibrary.updateBook(3, new Book(3, "JavaScript nâng cao", "Lê Văn C", 2022));
console.log("Danh sách sau cập nhật:", myLibrary.listBooks());

myLibrary.removeBook(1);
console.log("Danh sách sau khi xóa:", myLibrary.listBooks());

console.log("Tìm 'TypeScript':", myLibrary.findBooksByTitleOrAuthor("TypeScript"));

console.log("Tổng số sách:", myLibrary.getTotalBooks());

console.log("Sách xuất bản năm 2020:", myLibrary.findBooksByYear(2020));

const ebookLibrary = new Library<EBook>();
ebookLibrary.addBook(new EBook(101, "AI cơ bản", "Nguyễn Văn D", 2023, 5.2));
ebookLibrary.addBook(new EBook(102, "Machine Learning", "Trần Văn E", 2024, 7.8));

console.log("Danh sách EBook:", ebookLibrary.listBooks());
