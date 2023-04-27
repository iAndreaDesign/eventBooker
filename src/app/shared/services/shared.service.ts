import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventsDetails, Session } from 'src/app/events/interfaces/events-details.interface';
import { cart, cartSession } from '../cart/cart.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cartList: cart[] = [];

  private myCart = new BehaviorSubject<cart[]>([])
  public myCart$ = this.myCart.asObservable();

  constructor() {
    this.loadLocalStorage();
  }

  public checkNumber(number: string) {
    if(!isNaN(Number(number))){
      return Number(number);
    } else{
        return -1;
    }
  }

  public checkQuantity(eventDetail: EventsDetails, session: Session) {
    return this.cartList!.find( e => {
      if(e.event.id === eventDetail.id) {
        e.session.find( s => {
          if(s.date === session.date) {
            return this.checkNumber(s.quantity).toString()
          } else return 0
        })
      }
    });
  }

  public removeSessionFromList(eventDetail: EventsDetails, session: Session) {
    this.cartList!.filter( e => {
      e.session = e.session.filter( s =>
        s.date != session.date
      )
    });

    //Check if there is sessions
    this.cartList!.find(e => {
      if(!(e.session.length > 0)) this.removeEventFromCart(eventDetail)
    })

    this.updateCartList();
  }

  public reduceAvailabilityFromSession(eventDetail: EventsDetails, session: Session) {
    this.cartList!.find( e => {
      if(e.event.id === eventDetail.id) {
        e.session.find( s => {
          if(s.date === session.date) {
            if(((this.checkNumber(s.quantity)) -1) > 0) {
              s.quantity = ((this.checkNumber(s.quantity)) - 1).toString();
            } else this.removeSessionFromList(eventDetail, session);
          }
        })
      }
    });

    this.updateCartList();
  }

  public addToCart(eventDetail: EventsDetails, session: Session) {
    if(session && eventDetail) {
      //Check if the session is available
      if((this.checkNumber(session.availability)) > 0) {
        //Check if the event is already on the cartList
        let isEvent = this.cartList.find( e => {
          return e.event.id === eventDetail.id
        })

        if(isEvent) {
          //Check if the session is already in the cartList
          let isSession = this.cartList.find( e => {
            return e.session.find( s => {
              return s.date === session.date
            })
          })
          if(isSession) {
            //The session is already in it, then increment the quantity
            this.incrementQuantityOfSession(eventDetail, session);
          } else {
            //The session is not in it, then add to the event array on the cartList
            this.addSessionToList(eventDetail, session);
          }
        } else {
          //The event is not in it, then add it to the cartList
          this.addEventToCart(eventDetail, session);
        }
      } else {
        //TODO: Error message when is not availability
        console.log("No quedan tickets")
      }
    }
  }

  private addEventToCart(eventDetail: EventsDetails, session: Session) {
    console.log("añadimos nuevo")
    this.cartList!.push( {
      event: eventDetail,
      session: [
        {
          date: session.date,
          availability: session.availability,
          quantity: "1"
        }
      ]
    } );
    this.updateCartList();
  }

  private removeEventFromCart(eventDetail: EventsDetails) {
    this.cartList = this.cartList!.filter( e => {
      return e.event.id != eventDetail.id
    })
    this.updateCartList();
  }

  private incrementQuantityOfSession(eventDetail: EventsDetails, session: Session) {
    this.cartList!.find( e => {
      if(e.event.id === eventDetail.id) {
        e.session.find( s => {
          if(s.date === session.date) {
            s.quantity = ((this.checkNumber(s.quantity)) + 1).toString();
          }
        })
      }
    });
    this.updateCartList();
  }

  private addSessionToList(eventDetail: EventsDetails, session: Session) {
    this.cartList!.find( e => {
      if(e.event.id === eventDetail.id) {
        e.session.push({
          date: session.date,
          availability: session.availability,
          quantity: "1"
        });
      }
    });
    this.updateCartList();
  }

  private updateCartList() {
    this.myCart.next(this.cartList);
    this.sharedSessionStorage();
  }

  private sharedSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  public loadLocalStorage() {
    if(sessionStorage.getItem('cart')) {
      this.cartList = JSON.parse(sessionStorage.getItem('cart')!);
      this.myCart.next(this.cartList);
    }
  }

}
