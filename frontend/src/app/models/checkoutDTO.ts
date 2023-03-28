import { BookStatus } from './book-status';

export interface CheckOutDTO {
   
     id: string;

     title: string;

     author: string;

     genre:string;

    year: number;

    added:Date;

    checkOutCount: number;

    checkedOutDate:Date;

    dueDate:Date;

    returnedDate:Date;

   
  }