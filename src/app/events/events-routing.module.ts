import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillboardPageComponent } from './pages/billboard-page/billboard-page.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: BillboardPageComponent
  },
  {
    path: 'details',
    component: EventDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
