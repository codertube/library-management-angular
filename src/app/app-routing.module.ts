import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBooksComponent } from './library/list-books/list-books.component';
import { CreateBooksComponent } from './library/create-books/create-books.component';

const routes: Routes = [
  { path: 'books', component: ListBooksComponent },
  { path: 'addbook', component: CreateBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
