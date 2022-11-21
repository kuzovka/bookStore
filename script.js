const books = [
    {
      id: 1,
      title: 'Игра престолов',
      authors: 'Джордж Мартин',
      year: '1996',
      image: 'https://m.media-amazon.com/images/I/51IHAPK5fsL._AC_UY218_.jpg'
    },
    {
      id: 2,
      title: 'Битва королей',
      authors: 'Джордж Мартин',
      year: '1998',
      image: 'https://m.media-amazon.com/images/I/7152-qeQl7L._AC_UY218_.jpg'
    },
    {
      id: 3,
      title:'Буря мечей',
      authors: 'Джордж Мартин',
      year: '2000',
      image:'https://m.media-amazon.com/images/I/61hEC15CvWL._AC_UY218_.jpg'
    },
    {
      id: 4,
      title:'Пир стервятников',
      authors: 'Джордж Мартин',
      year: '2005',
      image:'https://m.media-amazon.com/images/I/51UKUTiSDUL._AC_UY218_.jpg'
    },
    {
      id: 5,
      title:'Танец с драконами',
      authors: 'Джордж Мартин',
      year: '2011',
      image: 'https://m.media-amazon.com/images/I/81WInI5d-TL._AC_UY218_.jpg'
      }
    ]

    const container = document.getElementById("books-container")
    const form = document.getElementById("formContainer")

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
                    <button onclick='deleteBook(${book.id})' class="btn">Удалить</button>
                  </div>
              </div>
          `
      }) 
    }

    function openForm() {
      form.style.display = "block"
    }
    

    function clearForm() {
      document.getElementById('name').value = ""
      document.getElementById('author').value = ""
      document.getElementById('year').value = ""
      document.getElementById('image').value = ""
    }

    function deleteBook (id) {
      const book = books.find((b) => {
        return b.id === id
      })
      const bookIndex = books.indexOf(book)
      books.splice(bookIndex, 1)
      renderBooks()
    }

    function addBook () {
      const nameValue = document.getElementById('name').value
      const authorValue = document.getElementById('author').value
      const yearValue = document.getElementById('year').value
      const imageValue = document.getElementById('image').value
      
      const book = {
        title: nameValue,
        authors: authorValue,
        year: yearValue,
        image: imageValue
      }

      form.style.display = "none" 

      books.push(book)
      renderBooks()
      clearForm()

    }


    renderBooks()


