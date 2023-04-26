import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CartComponent,
    HeaderComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CartComponent,
    HeaderComponent,
    Error404PageComponent
  ]
})
export class SharedModule { }
