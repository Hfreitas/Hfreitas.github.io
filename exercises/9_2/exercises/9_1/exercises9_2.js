const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1.Encontre o nome da pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = () => {
  const authorName = books.find((element) => element.author.birthYear === 1947);
  return authorName.author.name;
};

assert.equal(authorBornIn1947(), 'Stephen King');

// 2. Retorne o nome do livro de menor nome.
const smallerName = () => {
  books.sort((a, b) => {
    const firstBookNameLength = a.name.length;
    const secondBookNameLength = b.name.length;

    if (firstBookNameLength > secondBookNameLength) return 1;
    if (firstBookNameLength < secondBookNameLength) return -1;
    return 0;
  });
  return books[0].name;
  undefined;
};

assert.equal(smallerName(), 'Duna');

// 3. Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = () => {
  const genreOfBooks = books.filter((element) => {
    return (
      element.genre === 'Ficção Científica' || element.genre === 'Fantasia'
    );
  });
  return genreOfBooks.name;
};

console.log(fantasyOrScienceFiction());

/* assert.deepEqual(fantasyOrScienceFiction(), [
  'As Crônicas de Gelo e Fogo',
  'O Senhor dos Anéis',
  'Fundação',
  'Duna',
]);*/
