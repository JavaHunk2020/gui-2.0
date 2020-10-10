import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../models/signup.model';
import { Observable, observable } from 'rxjs';
import { AppResponse } from '../models/app.response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
   }

  //  public addUser(signUp:Signup) :Observable<AppResponse> {
    
  //   //Content-Type="application/json"
  //   //Accept="application/json"
  //   //{"code":"1232","message":"Data is uploaded successfully"}
  //   return this.http.post<AppResponse>("https://localhost:8443/v3/customers/enquiry",signUp);
  //  }

  public addUser(signUp:Signup) :Observable<AppResponse> {
    console.log("calling rest api");
    console.log(signUp);
    return this.http.post<AppResponse>("https://localhost/v3/customers",signUp);
        
   }

   //List<Customer>
   public findCustomers():Observable<Signup[]>{
    return this.http.get<Signup[]>("https://localhost/v3/customers");
   }

   public addTUser(signUp:Signup) :Observable<string> {
    console.log("calling rest api");
    console.log(signUp);
    let data:Observable<string>=new Observable(ob=>{
      ob.next("data is uploaded successfully");
      ob.complete();
    });
    return data;
   }
}
