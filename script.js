// Objetos

const books = [
    // 1.
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "./assets/thingsFallApart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },

    // 2.
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "./assets/fairyTales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },

    // 3.
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "./assets/theDivineComedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },

    // 4.
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "./assets/epicGilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },

    // 5.
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "./assets/bookOfJob.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }
]



// Fase 1.
for (i = 0; i < books.length; i++) {
    // article
    let article = document.createElement('article');
    article.setAttribute('class', 'book')
    document.getElementById('biblio1').appendChild(article);

    // title
    let title = document.createElement('h2');
    title.appendChild(document.createTextNode(books[i].title));
    article.appendChild(title);

    // p
    let author = document.createElement('p');
    author.appendChild(document.createTextNode('Author: '+books[i].author));
    article.appendChild(author);
    let country = document.createElement('p');
    country.appendChild(document.createTextNode('Country: '+books[i].country));
    article.appendChild(country);
    let language = document.createElement('p');
    language.appendChild(document.createTextNode('Language: '+books[i].language));
    article.appendChild(language);
    let year = document.createElement('p');
    year.appendChild(document.createTextNode(('Year: '+books[i].year)));
    article.appendChild(year);
    let pages = document.createElement('p');
    pages.appendChild(document.createTextNode('Pages: '+books[i].pages));
    article.appendChild(pages);

    // img
    let image = document.createElement('img');
    image.src = books[i].imageLink;
    image.alt = books[i].title + ' Book Cover';
    article.appendChild(image);

    // link
    let link = document.createElement('a');
    let linkImg = document.createElement('img');
    article.appendChild(link);
    link.appendChild(linkImg);
    link.href = books[i].link;
    link.target = '_blank';
    linkImg.src = './assets/wikipedia.png';
    linkImg.alt = 'Wikipedia Logo';
    linkImg.setAttribute('class', 'wiki');
}



// Fase 2.
for (i = 0; i < books.length; i++) {
    let markUp =    `<article class="book">
                    <h2>${books[i].title}</h2>
                    <p>Author: ${books[i].author}</p>
                    <p>Country: ${books[i].country}</p>
                    <p>Language: ${books[i].language}</p>
                    <p>Year: ${books[i].year}</p>
                    <p>Pages: ${books[i].pages}</p>
                    <img src="${books[i].imageLink}" alt="${books[i].title} Book Cover">
                    <a href="${books[i].link}" target="_blank"><img src="./assets/wikipedia.png" alt="Wikipedia Logo" class="wiki"></a>
                    </article>`
    document.getElementById('biblio2').innerHTML += markUp;
}
