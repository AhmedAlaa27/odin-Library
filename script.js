const myLibrary = []

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
        readStatus.style.color = (book.read) ? "green" : "purple"

        const toggleReadButton = document.createElement("button")
        toggleReadButton.textContent = (book.read) ? "Unread" : "Read"
        toggleReadButton.classList.add("read-status")
        toggleReadButton.addEventListener("click", () => book.changeRead())

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Remove"
        deleteButton.classList.add("remove")
        deleteButton.addEventListener("click", () => deleteBook(book))

        bookDiv.appendChild(readStatus)
        bookDiv.appendChild(toggleReadButton)
        bookDiv.appendChild(deleteButton)

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

function deleteBook(book) {
    myLibrary.splice(myLibrary.findIndex(b => b.id === book.id), 1)
    displayBooks()
}

Book.prototype.changeRead = function() {
    this.read = (this.read) ? false : true
    displayBooks()
} 

const book1 = new Book(0, "Book1", "Ahmed", 365, false)
const book2 = new Book(2, "Book2", "Mohammed", 180, false)
const book3 = new Book(3, "Book3", "Jesus", 90, false)

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)

displayBooks()
formSubmit()