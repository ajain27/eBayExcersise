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
  }

  public getBooks() {
    this._bookService.getBooks().subscribe(books => {
      this.books = books.items;
      console.log(this.books);
    });
  }

  public addBookToWishList(book: Book) {
    this._bookService.book.next(book);
  }

  public getFilteredResults(e) {
    console.log(e);
    this.searchResults = e;
  }
}
