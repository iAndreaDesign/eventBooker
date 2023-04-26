import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventsDetails, Session } from 'src/app/events/interfaces/events-details.interface';
import { cart } from '../cart/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cartList: cart[] = [];

  private myCart = new BehaviorSubject<cart[]>([])
  public myCart$ = this.myCart.asObservable();

  addEvent(eventDetail: EventsDetails, session: Session) {
    if(session && eventDetail) {
      //comprobamos si esta available
      if(this.checkNumber(session.availability) > 0) {
        //Comprobamos si ya está en la lista por el session date
        let sessionMod = this.cartList.find( s => {
          return s.session.date == session.date;
        })

        //Si ya está en la lista solo incrementamos su cantidad
        if(sessionMod) {
          let number = this.checkNumber(sessionMod.quantity);
          number += 1;
          sessionMod.quantity = number.toString();
          this.myCart.next(this.cartList);
        } else {
          //Si no está añadimos el objeto
          this.cartList!.push( {
            event: eventDetail,
            session: session,
            quantity: "1"
          } );
          this.myCart.next(this.cartList);
        }
      } else console.log("No quedan más tickets")
    }
  }

  removeSession(eventDetail: EventsDetails, session: Session) {
    if(session && eventDetail) {
      //Comprobamos si ya está en la lista por el session date
      let sessionMod = this.cartList.find( s => {
        return s.session.date == session.date;
      })

      //Si ya está en la lista solo reducimos su cantidad
      if(sessionMod) {
        let number = this.checkNumber(sessionMod.quantity);
        number -= 1;
        if(number == 0) this.removeEvent(session);
        else {
          sessionMod.quantity = number.toString();
          this.myCart.next(this.cartList);
        }
      }
    }
  }

  removeEvent(session: Session) {
    this.cartList = this.cartList.filter( s => {
      return s.session.date != session.date;
    });
    this.myCart.next(this.cartList);
  }

  checkNumber(number: string) {
    if(!isNaN(Number(number))){
      return Number(number);
    } else{
        return -1;
    }
  }
}