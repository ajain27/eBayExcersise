import { AfterViewInit, Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../../services/books.service';
// import { debounceTime, distinctUntilChanged, pluck, switchMap, tap, map } from 'rxjs/operators';
import { Book } from '../../models/book';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('search') lookUpBook: NgForm;
  @Output() data: EventEmitter<Book> = new EventEmitter();
  public searchedText: Book;

  constructor(private _bookService: BooksService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.searchBook();
  }

  // public searchBook(enteredValue?: string) {
  //   const formValue = this.lookUpBook.valueChanges;
  //   formValue.pipe(
  //     pluck('search'),
  //     debounceTime(1000),
  //     distinctUntilChanged(),
  //     // map(book => book),
  //     switchMap((book: string) =>
  //       this._bookService.searchBook(book))
  //   ).subscribe((result) => {
  //     this.searchResults = result.items;
  //     this.searchResults.forEach((value, key) => {
  //       if (key === enteredValue) {
  //         this.searchResults.concat(key);
  //       }
  //     });
  //   });
  // }

  // public searchBook() {
  //   this._bookService.searchedBook.next(this.searchedText);
  // }

  public searchBook() {
    this.data.emit(this.searchedText);
  }
}

