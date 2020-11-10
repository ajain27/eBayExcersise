import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, AfterViewInit {

  constructor(private _bookService: BooksService) { }

  ngOnInit() {  }

  ngAfterViewInit(): void {
    // this.getBooks();
  }
}
