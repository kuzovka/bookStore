const books = [
    {
      title: 'Игра престолов',
      authors: 'Джордж Мартин',
      year: '1996',
      image: 'https://m.media-amazon.com/images/I/51IHAPK5fsL._AC_UY218_.jpg'
    },
    {
      title: 'Битва королей',
      authors: 'Джордж Мартин',
      year: '1998',
      image: 'https://m.media-amazon.com/images/I/7152-qeQl7L._AC_UY218_.jpg'
    },
    {
      title:'Буря мечей',
      authors: 'Джордж Мартин',
      year: '2000',
      image:'https://m.media-amazon.com/images/I/61hEC15CvWL._AC_UY218_.jpg'
    },
    {
      title:'Пир стервятников',
      authors: 'Джордж Мартин',
      year: '2005',
      image:'https://m.media-amazon.com/images/I/51UKUTiSDUL._AC_UY218_.jpg'
    },
    {
        title:'Танец с драконами',
        authors: 'Джордж Мартин',
        year: '2011',
        image: 'https://m.media-amazon.com/images/I/81WInI5d-TL._AC_UY218_.jpg'
      }
    ]

    const container = document.getElementById("books-container")


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
                  <button class="btn">Удалить</button>
                </div>
             </div>
        `
    })