import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public wishList;
  constructor(private _bookService: BooksService) { }

  ngOnInit() {}

  public getWishListBooks(e) {
    this.wishList = e;
  }

}
