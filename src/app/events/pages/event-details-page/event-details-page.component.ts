import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsDetails } from '../../interfaces/events-details.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styles: [
  ]
})
export class EventDetailsPageComponent implements OnInit {

  public eventDetail?: EventsDetails;
  public availability: string = "0";
  public eventsSelected: string = "0";

  constructor( private eventService: EventsService, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap( ({id}) => this.eventService.getEventInfo(id))
      ).subscribe(eventDetail => {
        if(!eventDetail || eventDetail == undefined) {
          return this.router.navigate(['404'])
        }
        return this.eventDetail = eventDetail;
      })
  }
}
