const myLibrary = [
    {
        title: "Book1",
        author: "Ahmed",
        pages: 360,
        read: false
    },
    {
        title: "Book2",
        author: "Alaa",
        pages: 180,
        read: true
    },
    {
        title: "Book3",
        author: "Fathy",
        pages: 270,
        read: false
    },
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div")

        bookDiv.classList.add("book")
        bookDiv.innerHTML = `
            <strong>${book.title}</strong>
            <em>${book.author}</em>
            <span>Pages: ${book.pages}</span>
        `

        const readStatus = document.createElement("span")
        readStatus.textContent = (book.read) ? "Read" : "Not Read"
        readStatus.style.color = (book.read) ? "green" : "red"

        bookDiv.appendChild(readStatus)

        const booksDiv = document.querySelector(".books")
        booksDiv.appendChild(bookDiv)
    })
}

displayBooks()