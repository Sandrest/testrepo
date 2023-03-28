import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Page, PageRequest } from '../../models/page';
import { Book } from '../../models/book';
import { PageEvent } from '@angular/material/paginator';
import { tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$!: Observable<Page<Book>>;
  searchTerm: string = '';
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  currentPageIndex: number = 0;
  totalItems: number = 0;
  baseUrl = 'http://localhost:8080/api';

 constructor(
    private bookService: BookService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  individualBook(bookId: string) {
    this.router.navigate(['/books', bookId]);
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    if (this.searchTerm !== '') {
      const pageIndex = 0;
      const pageSize = 10;
      this.books$ = this.bookService.searchBooks(this.searchTerm, pageIndex, pageSize);
    } else {
      this.books$ = this.bookService.getBooks({});
    }
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks({});
    if (this.searchTerm !== '') {
      const pageIndex = 0;
      const pageSize = 10;
      this.books$ = this.bookService.searchBooks(this.searchTerm, pageIndex, pageSize);
    }
  }

  getBooks(pageIndex: number, pageSize: number): Observable<Page<Book>> {
    const url = `${this.baseUrl}/book?pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return this.http.get<Page<Book>>(url).pipe(
      tap(response => console.log(response)),
    );
  }


  loadBooks(pageRequest: PageRequest) {
    
    const url = `${this.baseUrl}/book/getBooks`;
    this.books$ = this.http.get<Page<Book>>(url).pipe(
      tap((data) => console.log(data))
    );
  }

  onPageChange(event: PageEvent): void {
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadBooks({ pageIndex: this.currentPageIndex, pageSize: this.pageSize });
  }

}
