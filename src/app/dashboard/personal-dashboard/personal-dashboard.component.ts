import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.css']
})
export class PersonalDashboardComponent implements OnInit {

  public contacts=[]
  public myImagePath = Cookie.get('imagePath')
  public myName = Cookie.get('contactName')
  public myMobile = Cookie.get('mobile')
  public myEmail = Cookie.get('email')

  constructor(public appService:AppService) { }

  ngOnInit(): void {
    this.getAllContacts()
  }
  getAllContacts():any{
    this.appService.getAllContacts().subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        for(let x of apiResponse.data ){
          let temp = {
            contactName : x.contactName,
            userId : x.userId,
            dob : x.dob.toLocaleString(),
            imagepath:x.imagePath,
            mobile:x.mobile,
            email:x.email
          }
          this.contacts.push(temp)
        }
        console.log(this.contacts)
      }
    })
  }
}
