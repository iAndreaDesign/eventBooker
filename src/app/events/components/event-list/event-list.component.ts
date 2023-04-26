import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../interfaces/events.interface';
import { EventsDetails, Session } from '../../interfaces/events-details.interface';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styles: [
  ]
})
export class EventListComponent{

  @Input() public eventDetail!: EventsDetails;

  constructor(private sharedService: SharedService) {}

  addToCart(eventDetail: EventsDetails, session: Session) {
    return this.sharedService.addEvent(eventDetail, session);
  }

  removeFromCart(eventDetail: EventsDetails, session: Session) {
    return this.sharedService.removeSession(eventDetail, session);
  }

}
