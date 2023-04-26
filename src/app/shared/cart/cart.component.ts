import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  myCart$ = this.sharedService.myCart$

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
