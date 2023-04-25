export interface EventsDetails {
  id:       string;
  title:    string;
  subtitle: string;
  image:    string;
  sessions: Session[];
}

export interface Session {
  date:         string;
  availability: string;
}
