import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public wishList;
  public searchText: any = '';
  constructor() { }

  ngOnInit() {}

  public gettingFilteredResults(e: Event): void {
    this.searchText = e;
  }
}
