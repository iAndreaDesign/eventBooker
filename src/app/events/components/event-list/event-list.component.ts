import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../interfaces/events.interface';
import { EventsDetails } from '../../interfaces/events-details.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [
  ]
})
export class EventListComponent{

  @Input() public eventDetail!: EventsDetails;

  constructor() {}

}
