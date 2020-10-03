import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title:string = 'test-ui';
  //In TypeScript we can write all the JavaScript!!!!!!!!!!!
  welcome="India is a country!!!!!";
  public message:string="";

  public btMessage="Coming Soon!";
 
  //@Autowired

  private messageService:MessageService;

  public changeMessage(msg) :void {
     this.btMessage=msg;
  }

  public constructor(messageService:MessageService) {
    this.messageService=messageService;
    this.welcome="This is JAPAN!!";
  }

  public ngOnInit() : void {
    this.welcome="This is USA!!";
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
