import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { CheckOut } from '../models/checkout';
import { Page, PageRequest } from '../models/page';
import { Observable } from 'rxjs'; 
import { RestUtil } from './rest-util';
import { CheckOutDTO } from '../models/checkoutDTO';



@Injectable({
  providedIn: 'root'
})

export class CheckoutService{

 private readonly baseUrl = environment.backendUrl + '/api/checkout';

 

    constructor(
      private http: HttpClient,
    ) {
    }

    getCheckouts(filter: Partial<PageRequest>): Observable<Page<CheckOut>> {
        const url = this.baseUrl + '/getCheckouts';
        const params = RestUtil.buildParamsFromPageRequest(filter);
        return this.http.get<Page<CheckOut>>(url, {params});
      }

      saveCheckout(checkOutDTO: CheckOutDTO): Observable<CheckOutDTO> {
        return this.http.post<CheckOutDTO>('/api/checkouts', checkOutDTO);
      }
  
    
 }