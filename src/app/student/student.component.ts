import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private messageService:MessageService;
  
  @Input("pmessage")
  public message:String="hello";

  @Output()
  public updateMessage=new EventEmitter<String>();


  //<input #anuska  type="text" name="username" class="form-control" id="username">
  public processUsername(pusername) : void {
     let value=pusername.value;
     console.log(value);
     this.updateMessage.emit(value);

  }


  public processMessage(msg):void {
       this.message=msg;
  }

  //@Autowired
  // public constructor(messageService:MessageService) {
  //   this.messageService=messageService;
  // }

  //This is best place to initialize the component
  ngOnInit(): void {
   /// this.messageService.getObserable().subscribe((message)=>{
     // this.message=message;
    //});
  }

}
