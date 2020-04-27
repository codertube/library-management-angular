import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { BookService } from "../../service/book.service";
import { Book } from '../../model/book';

@Component({
  selector: 'app-lib-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.sass']
})
export class ListBooksComponent implements OnInit {

  books: Observable<Book[]>;
  editBook: boolean = false;
  constructor(private bookService : BookService,private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  updateBook(book){
    this.bookService.isEditClicked(true,book);
    this.router.navigate(['/addbook']);
  }
}
