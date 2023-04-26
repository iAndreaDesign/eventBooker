import { EventsDetails, Session } from "src/app/events/interfaces/events-details.interface";

export interface cart {
  event:    EventsDetails;
  session:  Session;
  quantity: string;
}
