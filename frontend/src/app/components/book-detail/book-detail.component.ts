import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { SuccessDialog } from '../success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialog } from '../delete-dialog/delete-dialog.component';
import { CheckoutService } from 'src/app/services/checkout.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private checkoutService: CheckoutService,
    private dialog: MatDialog
  ) {
  }



  openTaskDialog() {
   
    
    const dialogRef = this.dialog.open(SuccessDialog);

    };
  

    chekoutBook(){
      // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
       
  
    }


    renturnBook(): void {
      
     
  
    }


    openDeleteDialog() {
   
    
      const dialogRef = this.dialog.open(DeleteDialog);
  
      };
    


  ngOnInit(): void {
    this.book$ = this.route.params
      .pipe(map(params => params['id']))
      .pipe(switchMap(id => this.bookService.getBook(id)))
  }

}
