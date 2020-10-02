import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //TypeScript supports generics
  private shareMessage:BehaviorSubject<String> = new BehaviorSubject(null);

  constructor() { 
  }

  public getObserable(): Observable<String> {
    //This returns Observable on Subject
    return this.shareMessage.asObservable();
 }

  //This method will write message on above subject
  public setMessage(message:String):void {
       console.log("message set = "+message);
      this.shareMessage.next(message);
  }

}
