import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('./events/events-routing.module').then( m => m.EventsRoutingModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
