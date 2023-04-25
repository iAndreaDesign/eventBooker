import { Component, OnInit } from '@angular/core';
import { Events } from '../../interfaces/events.interface';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-billboard-page',
  templateUrl: './billboard-page.component.html',
  styles: [
  ]
})
export class BillboardPageComponent implements OnInit {

  public events: Events[] = [];

  constructor( private eventService: EventsService ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe( event => this.events = event)
  }

}
