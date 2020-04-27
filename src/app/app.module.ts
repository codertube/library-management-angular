import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from "./service/book.service";
import { ListBooksComponent } from './library/list-books/list-books.component';
import { CreateBooksComponent } from './library/create-books/create-books.component';
import { LibraryComponent } from './library/library.component'

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    CreateBooksComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
