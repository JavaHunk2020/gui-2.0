import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Signup } from '../models/signup.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup:Signup=new Signup();

  public title:string = 'test-ui';

  public message:string="";
  
  public constructor(private authService:AuthService,private router:Router) {
  }
  
  public ngOnInit() : void {
   
  }

  public csignup() {
    console.log(this.signup);
    this.authService.addUser(this.signup).subscribe(data=>{
        console.log(data);   
        this.router.navigate(['/auth']);
    });
  }
}
