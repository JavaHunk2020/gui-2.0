import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { Signup } from '../models/signup.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public title:string = 'test-ui';
  //In TypeScript we can write all the JavaScript!!!!!!!!!!!
  welcome="India is a country!!!!!";
  public message:string="";

  public btMessage="Coming Soon!";

  @ViewChild(StudentComponent)
  public studentChild:StudentComponent;
  
  //@Autowired

  private messageService:MessageService;

  public customers:Signup[]=[];

  public changeMessage(msg) :void {
     this.btMessage=msg;
     this.studentChild.processMessage("this is from parent!~");
  }

  public constructor(messageService:MessageService,private authService:AuthService) {
    this.messageService=messageService;
    this.welcome="This is JAPAN!!";
  }

  public ngOnInit() : void {
    this.welcome="This is USA!!";
    this.authService.findCustomers().subscribe(customers=>{
          this.customers=customers;
    });

  }

  public authUser(username,password){
      console.log(username.value);
      console.log(password.value);
      //var auth:Signup =new Signup();
      ///auth.email=username;
      //auth.password=password;
      this.authService.authUser(username.value,password.value).subscribe(data=>{
        console.log(data);
         if(data.code=="400"){
           this.message="Sorry! username and password are not correct!!!";
           this.messageService.setMessage("Sorry! username and password are not correct!!!");
       
         }else{
           this.message="Cool! username and password are correct!!!";
           this.messageService.setMessage("Cool! username and password are correct!!!");
  
         }
      });

      // if("technohunk100@gmail.com"===username.value && "cool@123"===password.value){
      //     this.message="Cool! username and password are correct!!!";
      //     this.messageService.setMessage("Cool! username and password are correct!!!");
      // }else{
      //   this.message="Sorry! username and password are not correct!!!";
      //   this.messageService.setMessage("Sorry! username and password are not correct!!!");
      // }
  }


}
