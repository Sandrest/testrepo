
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { CheckOut} from '../../models/checkout';
import { tap } from 'rxjs/operators';

/**
 * @title Card with sub-title
 */
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit  {
  
  checkout$!: Observable<Page<CheckOut>>;

  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.checkout$ = this.checkoutService.getCheckouts({});

  }
}
