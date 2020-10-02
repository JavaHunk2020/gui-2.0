import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private messageService:MessageService;

  public message:String="hello";

  //@Autowired
  public constructor(messageService:MessageService) {
    this.messageService=messageService;
  }

  //This is best place to initialize the component
  ngOnInit(): void {
    this.messageService.getObserable().subscribe((message)=>{
      this.message=message;
    });
  }

}
