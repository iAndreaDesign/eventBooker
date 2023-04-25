import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsDetails } from '../interfaces/events-details.interface';
import { Events } from '../interfaces/events.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EventsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000';

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/events`);
  }

  getEventInfo(termino: string): Observable<EventsDetails[]> {
    return this.http.get<EventsDetails[]>(`${ this.baseUrl }/event-details?q=${termino}`);
  }


}
