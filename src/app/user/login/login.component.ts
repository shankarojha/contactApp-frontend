import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email: String;
  public password: String;

  constructor(
    public router: Router,
    public appService: AppService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  public loginFunction = (): any => {
    let data = {
      email: this.email,
      password: this.password,
    };
    
    if (!this.email) {
      let element = document.getElementById("InputEmail1");
      element.classList.add("is-invalid");
      this.toastr.warning('please enter your Email');
      
    } else if (!this.password) {
      let element = document.getElementById("InputPassword1");
      element.classList.add("is-invalid");
      this.toastr.warning('please enter your password');
      
    } else {
      this.appService.loginFunction(data).subscribe(
        (apiResponse) => {
          if (apiResponse.status === 200) {
            Cookie.set('authToken', apiResponse.data.authToken);
            Cookie.set('userId', apiResponse.data.userDetails.userId);
            Cookie.set('dob', apiResponse.data.userDetails.dob);
            Cookie.set('email', apiResponse.data.userDetails.email);
            Cookie.set('contactName', apiResponse.data.userDetails.contactName);
            Cookie.set('joinedOn', apiResponse.data.userDetails.joinedOn);
            Cookie.set('imagePath', apiResponse.data.userDetails.imagePath)
            Cookie.set('mobile',apiResponse.data.userDetails.mobile)

            this.appService.setUserInfoToLocalStorage(
              apiResponse.data.userDetails
            );
            console.log(apiResponse);
            let routerNavigate = () =>{
              this.router.navigate(['/personaldashboard'])
            }
            setTimeout(routerNavigate,2000)
            this.toastr.success(apiResponse.message);
          } else {
            this.toastr.error(apiResponse.message);
          }
        },
        (err) => {
          this.toastr.error('some error occured');
        }
      );
    }
  };
}
