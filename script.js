let count = 0

let books = [
    {
      id: count++,
      title: 'Игра престолов',
      authors: 'Джордж Мартин',
      year: '1996',
      image: 'https://m.media-amazon.com/images/I/51IHAPK5fsL._AC_UY218_.jpg'
    },
    {
      id: count++,
      title: 'Битва королей',
      authors: 'Джордж Мартин',
      year: '1998',
      image: 'https://m.media-amazon.com/images/I/7152-qeQl7L._AC_UY218_.jpg'
    },
    {
      id: count++,
      title:'Буря мечей',
      authors: 'Джордж Мартин',
      year: '2000',
      image:'https://m.media-amazon.com/images/I/61hEC15CvWL._AC_UY218_.jpg'
    },
    {
      id: count++,
      title:'Пир стервятников',
      authors: 'Джордж Мартин',
      year: '2005',
      image:'https://m.media-amazon.com/images/I/51UKUTiSDUL._AC_UY218_.jpg'
    },
    {
      id: count++,
      title:'Танец с драконами',
      authors: 'Джордж Мартин',
      year: '2011',
      image: 'https://m.media-amazon.com/images/I/81WInI5d-TL._AC_UY218_.jpg'
      }
    ]

    const container = document.getElementById("books-container")
    const addModal = document.getElementById("add-modal")
    const closeModalButton = document.getElementById("close-modal-button")
    const openModelButton = document.getElementById("open-modal-button")
    const saveButton = document.getElementById("save-modal-button")


    function closeModal() {
      addModal.style.display = 'none'
    }

    function openModal() {
      addModal.style.display = 'flex'
    }


    function renderBooks() {
      container.innerHTML = ""
      books.forEach((book) => {
          container.innerHTML += `
              <div class="book-item">
                  <div class="book-data">
                    <div>
                      <img src ="${book.image}" class=class="book-image"/>
                    </div>
                    <h2 class="book-title">${book.title}</h2>
                    <p>${book.year}</p>
                    <p class="book-authors">${book.authors}</p>
                    </div>
                  <div class="book-button">
                    <button class="delete-button" id="delete-button-${book.id}">Удалить</button>
                  </div>
                  <div class="book-button">
                    <button class="delete-button" id="updateButton-${book.id}">Обновить</button>
                  </div>
              </div>
          `
      })

      books.forEach((book) => {
        document
        .getElementById(`delete-button-${book.id}`)
        .addEventListener("click", () => {
        deleteBook(book.id);
    });
    });

    books.forEach((book) => {
      document.getElementById(`updateButton-${book.id}`).addEventListener("click", () => openUpdateModal(book.id))
    })

    saveToLocalStorage()

    }



    function clearForm() {
      document.getElementById('name').value = ""
      document.getElementById('author').value = ""
      document.getElementById('year').value = ""
      document.getElementById('image').value = ""
    }

    function saveToLocalStorage() {
      const booksJson = JSON.stringify(books)
      localStorage.setItem("books", booksJson)
    }

    function deleteBook (id) {
      const book = books.find((b) => {
        return b.id === id
      })
      const bookIndex = books.indexOf(book)
      books.splice(bookIndex, 1)
      renderBooks()
      saveToLocalStorage()
    }

    function addBook () {
      const nameValue = document.getElementById('name').value
      const authorValue = document.getElementById('author').value
      const yearValue = document.getElementById('year').value
      const imageValue = document.getElementById('image').value

      const book = {
        id: count++,
        title: nameValue,
        authors: authorValue,
        year: yearValue,
        image: imageValue
      }

      books.push(book)
      renderBooks()
      clearForm()
      closeModal()
      saveToLocalStorage()

    }

    closeModalButton.addEventListener('click', closeModal)
    openModelButton.addEventListener('click', openModal)
    saveButton.addEventListener('click', addBook)


    const booksJson = localStorage.getItem('books')
    const savedBooks = JSON.parse(booksJson)
    if (booksJson) {
      books = savedBooks
    }

    const updateModal = document.getElementById('update-modal')
    const closeUpdateModalButton = document.getElementById("closeUpdateModalButton")
    const updateBookButton = document.getElementById("updateBookButton")

    closeUpdateModalButton.addEventListener("click", closeUpdateModal)
    function closeUpdateModal() {
      updateModal.style.display = "none"
    }

    function openUpdateModal (id) {
      updateModal.style.display = "flex"

      const currentBook = books.find(b => b.id === id)

      document.getElementById('updateName').value = currentBook.title
      document.getElementById('updateAuthor').value = currentBook.authors
      document.getElementById('updateYear').value = currentBook.year
      document.getElementById('updateImage').value = currentBook.image


     const makeUpdate = () => updateBook(id, makeUpdate)

      updateBookButton.addEventListener("click", makeUpdate)


    }

    function updateBook(id, makeUpdate) {
      updateBookButton.removeEventListener("click", makeUpdate)

      const oldBook = books.find(b => b.id === id)

      const nameValue = document.getElementById('updateName').value
      const authorValue = document.getElementById('updateAuthor').value
      const yearValue = document.getElementById('updateYear').value
      const imageValue = document.getElementById('updateImage').value

      const newBook = {
        id,
        title: nameValue,
        authors: authorValue,
        year: yearValue,
        image: imageValue
      }

      const bookIndex = books.indexOf(oldBook)
      books.splice(bookIndex, 1, newBook)

      renderBooks()
      saveToLocalStorage()
      closeUpdateModal()



    }


    renderBooks()



