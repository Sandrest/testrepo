import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessDialog } from './components/success-dialog/success-dialog.component';
import { DeleteDialog } from './components/delete-dialog/delete-dialog.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailComponent,
    CheckoutComponent,
    SuccessDialog,
    DeleteDialog,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
