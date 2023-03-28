import { Book } from './book';

export interface CheckOut {
  id: string;
  borrowerFirstName: string;
  borrowerLastName: string;
  checkedOutDate:Date;
  dueDate: Date;
  returnedDate:Date;
  book:Book;
  

  }
  