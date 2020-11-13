import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {

  public books: any;
  public searchResults: Book;
  @ViewChild('book') book: ElementRef;

  constructor(private _bookService: BooksService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.getBooks();
    setTimeout(() => {
      this._bookService.searchedBook.subscribe((searchedBook: Book) => {
        this.searchResults = searchedBook;
        console.log('--searchResults--', searchedBook);
      });
    }, 2000);
  }

  public getBooks() {
    this._bookService.getBooks().subscribe(books => {
      this.books = books.items;
    });
  }

  public addBookToWishList(book: Book) {
    this._bookService.book.next(book);
  }
}
