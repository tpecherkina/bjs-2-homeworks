//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.type = null;
      this.state = 100;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
  
    set state(amount) {
  
      if (amount < 0) {
        this._state = 0;
      }
      else if (amount > 100) {
        this._state = 100;
      } else {
        this._state = amount;
      }
    }
  
    get state() {
      return this._state;
    }
  
  }
  
  class Magazine extends PrintEditionItem {
  
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
  
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  //Задача 2
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let book = null;
      for (const item of this.books){
      if (item[type] === value) {
        book = item;
    }
}
return book;
}
  
    giveBookByName(bookName) {
		let book = null;
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				book = this.books.splice(i, 1);
				return book[0];
			}
		}
		return book;
	}
}