import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../interfaces/events.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [
  ]
})
export class EventListComponent implements OnInit {

  public events: Events[] = [];

  constructor( private eventService: EventsService ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe( event => this.events = event)
  }

}
