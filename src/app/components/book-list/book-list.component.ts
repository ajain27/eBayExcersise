import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {

  public books: any;
  @ViewChild('book') book: ElementRef;
  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(private _bookService: BooksService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this._bookService.getBooks().subscribe(books => {
      this.books = books.items;
    });
  }

  public addBookToWishList(book: Book) {
    this._bookService.book.next(book);
    // console.log(this._bookService.book.next(book));
    // this.data.emit(book);
  }
}
