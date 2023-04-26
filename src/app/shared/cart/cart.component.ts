import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Session } from 'src/app/events/interfaces/events-details.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {

  myCart$ = this.sharedService.myCart$

  constructor(private sharedService: SharedService) { }

  deleteFromCart(session: Session) {
    return this.sharedService.removeEvent(session);
  }

}
