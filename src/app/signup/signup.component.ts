import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public title:string = 'test-ui';
  //In TypeScript we can write all the JavaScript!!!!!!!!!!!
  welcome="India is a country!!!!!";
  public message:string="";

  public btMessage="Coming Soon!";

  @ViewChild(StudentComponent)
  public studentChild:StudentComponent;
  
  //@Autowired
  public constructor(messageService:MessageService,private router:Router) {
    this.messageService=messageService;
    this.welcome="This is JAPAN!!";
  }

 
  public signUpPage() :void{
    this.router.navigate(['/auth']);
  }

  private messageService:MessageService;

  public changeMessage(msg) :void {
     this.btMessage=msg;
     this.studentChild.processMessage("this is from parent!~");
  }

  
  public ngOnInit() : void {
    this.welcome="User Signup Page";
  }

  public authUser(username,password){
      console.log(username.value);
      console.log(password.value);
      if("technohunk100@gmail.com"===username.value && "cool@123"===password.value){
          this.message="Cool! username and password are correct!!!";
          this.messageService.setMessage("Cool! username and password are correct!!!");
      }else{
        this.message="Sorry! username and password are not correct!!!";
        this.messageService.setMessage("Sorry! username and password are not correct!!!");
      }
  }


}
