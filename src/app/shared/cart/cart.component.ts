import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { EventsDetails, Session } from 'src/app/events/interfaces/events-details.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {

  myCart$ = this.sharedService.myCart$

  constructor(private sharedService: SharedService) { }

  removeSessionFromList(eventDetail: EventsDetails, session: Session) {
    return this.sharedService.removeSessionFromList(eventDetail, session);
  }

}
