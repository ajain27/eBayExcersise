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
  wishListArray: Book[] = [];
  constructor(private _bookService: BooksService) {
    this._bookService.book.subscribe((res: any) => {
      this.wishListArray.push(res);
      console.log(this.wishListArray);
    });
   }

  ngOnInit() { }
}
