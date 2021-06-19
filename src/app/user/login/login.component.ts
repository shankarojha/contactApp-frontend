import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:String
  public password:String
  public dob:Date
  public joinedOn:Date

  constructor(public router: Router, public appService:AppService, public toastr:ToastrService) { }

  ngOnInit(): void {
  }
public loginFunction = ():any => {

  let data={
    email:this.email,
    password:this.password
  }

  this.appService.loginFunction(data).subscribe((apiResponse)=>{
    if(apiResponse.status===200){
      Cookie.set('authToken',apiResponse.data.authToken)
      Cookie.set('userId', apiResponse.data.userDetails.userId)
      Cookie.set('dob',apiResponse.data.userDetails.dob)
      Cookie.set('email',apiResponse.data.userDetails.email)
      Cookie.set('contactName',apiResponse.data.userDetails.contactName)
      Cookie.set('joinedOn',apiResponse.data.userDetails.joinedOn)

      this.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails)
      console.log(apiResponse)
      this.toastr.success(apiResponse.message)

      this.dob=new Date(Cookie.get('dob'))
      this.joinedOn= new Date(Cookie.get('joinedOn'))
      
    }else{
      this.toastr.error(apiResponse.message)
    }
  },(err)=>{
    this.toastr.error("some error occured")
  })
}

}
