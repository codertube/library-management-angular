import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from "../../service/book.service";
import { Book } from '../../model/book';

@Component({
  selector: 'app-lib-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.sass']
})
export class CreateBooksComponent implements OnInit{

  book: Book;
  updateBookObj: any;

  constructor(private router: Router, private bookService: BookService) { 
    this.book = new Book();
    this.bookService.isEditClickedObservable.subscribe(res => {
      this.updateBookObj = res;
      if(this.updateBookObj && this.updateBookObj.isEditClicked){
        this.bookService.updateBook(this.updateBookObj.book.id,this.updateBookObj.book).subscribe(data => 
          this.book = data, error => console.log(error));
      }
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(result => this.gotoBookList());
  }
 
  gotoBookList() {
    this.router.navigate(['/books']);
    this.bookService.isEditClicked(false,this.book);
  }
}
