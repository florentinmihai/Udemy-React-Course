const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);
book;

//deconstructing
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

//rest operator
const [primaryGenre, secGenre, ...otherGenres] = genres;

console.log(primaryGenre, secGenre, otherGenres);

// spread operator
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  //adding new property
  moviePublicationDate: "2001-12-19",
  //overriding property
  pages: 1210,
};
updatedBook;

//template literal
const summary = `${title}, a ${pages} page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//ternary operator instead of if else
const pagesRange = pages > 1000 ? "over 1000" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

//arrow functions

// function getYear(str) {
//   return str.split("-")[0];
// }

//vs

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

//short circuiting and logical operators
console.log(true && "some string");
console.log(false && "some string");

console.log(hasMovieAdaptation && "THIS BOOK HAS A MOVIE");

//FALSY: 0, '', null, undefined
console.log("JONAS" && "some string");

console.log(0 && "some string");

//truthy
console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "not translated";
spanishTranslation;

console.log(book?.reviews?.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

//optional chaining operator
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return librarything + goodreads;
}

// console.log(getTotalReviewCount(book));

//array map method
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);

console.log(x);

const titles = books.map((book) => book.title);

titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//array filter method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//array reduce method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//array sort method (mutates the original array)
const arr = [3, 7, 4, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); //slice to avoid mutation

sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//working with immutable arrays
//1)Add a book object to the array
const newBook = {
  id: 6,
  title: "hARRY pOTTER BLA BLA",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2) Delete a book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//3)Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1211 } : book
);
booksAfterUpdate;
*/

//asyncronus javascript
// fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
//   res.json().then((data) => console.log(data))
// );

//async await
async function getToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
const todos = getToDos();
getToDos();
console.log(todos);
