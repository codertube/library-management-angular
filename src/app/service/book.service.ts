import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { Subject } from "rxjs";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  isEditClickedSubject = null;
  isEditClickedObservable = null;
  updateBookObj = { isEditClicked: false, book: null}

  private baseUrl = 'http://localhost:8082/api/books';
  constructor(private http: HttpClient) {
    this.isEditClickedSubject = new BehaviorSubject(this.updateBookObj);
    this.isEditClickedObservable = this.isEditClickedSubject.asObservable();
  }

  isEditClicked(editClicked:boolean,book:Book) {
    this.updateBookObj = { "isEditClicked" : editClicked,"book": book };
    this.isEditClickedSubject.next(this.updateBookObj);
  }
  public getBooks(): Observable<any> {
    return this.http.get<Book[]>(this.baseUrl);
  }
  public addBook(book: Book) {
    return this.http.post<Book>(this.baseUrl, book);
  }
  public updateBook(id: number, book: Book): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, book);
  }
}