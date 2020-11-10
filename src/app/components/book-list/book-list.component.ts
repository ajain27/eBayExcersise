import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {

  public books: any;
  constructor(private _bookService: BooksService) { }

  ngOnInit() {  }

  ngAfterViewInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this._bookService.getBooks().subscribe(books => {
      this.books = books.items;
      console.log(this.books);
    });
  }

}
