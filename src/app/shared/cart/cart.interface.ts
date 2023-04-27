import { EventsDetails, Session } from "src/app/events/interfaces/events-details.interface";

export interface cart {
  event:    EventsDetails;
  session:  cartSession[];
}

export interface cartSession {
  date:         string;
  availability: string;
  quantity:     string;
}
