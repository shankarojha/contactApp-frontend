import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.css']
})
export class PersonalDashboardComponent implements OnInit {

  public contact=[]
  public imagePath=[]

  constructor(public appService:AppService) { }

  ngOnInit(): void {
    this.getAllContacts()
  }
  getAllContacts():any{
    this.appService.getAllContacts().subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        for(let x of apiResponse.data ){
          this.contact.push(x.contactName)
          this.imagePath.push(x.imagePath)
        }
      }
    })
  }
}
