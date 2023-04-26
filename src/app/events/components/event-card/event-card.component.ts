import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../interfaces/events.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: []
})
export class EventCardComponent {

  @Input() public event!: Events;

  constructor() { }

}
