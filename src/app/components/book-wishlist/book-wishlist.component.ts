import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.css']
})
export class BookWishlistComponent implements OnInit {

  public wishList: Book;
  public wishListArray: Book[] = [];
  public wishListLength = 0;
  constructor(private _bookService: BooksService) {}

  ngOnInit() {
    this._bookService.book.subscribe((res: any) => {
      if (this.wishListArray.indexOf(res) === -1) {
        this.wishListArray.push(res);
      }
        this.wishListLength = this.wishListArray.length;
    });
  }
}
