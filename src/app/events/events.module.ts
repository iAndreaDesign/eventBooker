import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { BillboardPageComponent } from './pages/billboard-page/billboard-page.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';


@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
    BillboardPageComponent,
    EventDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
