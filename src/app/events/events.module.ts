import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { BillboardPageComponent } from './pages/billboard-page/billboard-page.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EventListComponent,
    BillboardPageComponent,
    EventDetailsPageComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    BrowserModule,
    SharedModule
  ]
})
export class EventsModule { }
