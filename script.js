const myLibrary = [
    {
        id: 0,
        title: "Book1",
        author: "Ahmed",
        pages: 360,
        read: false
    },
    {
        id: 1,
        title: "Book2",
        author: "Alaa",
        pages: 180,
        read: true
    },
    {
        id: 2,
        title: "Book3",
        author: "Fathy",
        pages: 270,
        read: false
    },
]

function Book(id, title, author, pages, read) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    const booksDiv = document.querySelector(".books")
    booksDiv.innerHTML = ``

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div")

        bookDiv.classList.add("book")
        bookDiv.setAttribute("data-index", book.id)
        bookDiv.innerHTML = `
            <strong>${book.title}</strong>
            <em>${book.author}</em>
            <span>Pages: ${book.pages}</span>
        `

        const readStatus = document.createElement("span")
        readStatus.textContent = (book.read) ? "Read" : "Not Read"
        readStatus.style.color = (book.read) ? "green" : "red"

        bookDiv.appendChild(readStatus)

        booksDiv.appendChild(bookDiv)
    })
}

function formSubmit() {
    const form = document.querySelector(".add-book")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let bookTitle = document.querySelector("#title")
        let bookAuthor = document.querySelector("#author")
        let bookPages = document.querySelector("#pages")
        let defaultRead = false
        let newId = myLibrary.length
        let newBook = new Book(newId, bookTitle.value, bookAuthor.value, bookPages.value, defaultRead)
        addBookToLibrary(newBook)
        displayBooks()
    })
}

displayBooks()
formSubmit()