import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { EventsDetails } from '../interfaces/events-details.interface';
import { Events } from '../interfaces/events.interface';

@Injectable({providedIn: 'root'})
export class EventsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000';

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/events`);
  }

  getEventInfo(termino: string): Observable<EventsDetails | undefined> {
    return this.http.get<EventsDetails>(`${ this.baseUrl }/event-details/${termino}`)
      .pipe( catchError( () => of(undefined)))
  }
}
