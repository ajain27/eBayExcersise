import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public wishList: Book;
  public searchText: any = '';
  public searchedBook: any = '';
  constructor() { }

  ngOnInit() {}
}
