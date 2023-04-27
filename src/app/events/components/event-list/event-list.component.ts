import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EventsDetails, Session } from '../../interfaces/events-details.interface';
import { SharedService } from 'src/app/shared/services/shared.service';
import { NgForm } from '@angular/forms';

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
    return this.sharedService.addToCart(eventDetail, session);
  }

  reduceAvailabilityFromSession(eventDetail: EventsDetails, session: Session) {
    return this.sharedService.reduceAvailabilityFromSession(eventDetail, session);
  }

}
