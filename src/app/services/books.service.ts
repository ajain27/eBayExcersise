import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  book = new Subject<Book>();
  searchedBook = new Subject<Book>();

  constructor(private _http: HttpClient) { }

  public getBooks(): Observable<any> {
    return this._http.get('assets/books.json');
  }

  public test(): Observable<any> {
    return this._http.get('assets/test.json');
  }

  public searchBook(name: string): Observable<Book> {
    const params = new HttpParams();
    params.append('search', name);
    return this._http.get<Book>('assets/books.json', {params: params});
  }
}
