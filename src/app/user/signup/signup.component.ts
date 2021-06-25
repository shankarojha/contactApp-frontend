import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';
import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public contactName: any;
  public dob: any;
  public mobile: any;
  public email: any;
  public password: any;
  public image: File;
  public imageSrc;
  public imageSrc2;

  constructor(
    public appService: AppService,
    public router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public fileSelected(event) {
    this.image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => (this.imageSrc = reader.result);

    reader.readAsDataURL(event.target.files[0]);
  }

  public signupFunction(): any {
    if (!this.contactName) {
      let element = document.getElementById('contactName1');
      element.classList.add('is-invalid');
      this.toastr.warning('please enter your Name');

    } else if (!this.dob) {
      let element = document.getElementById('dobirth');
      element.classList.add('is-invalid');
      this.toastr.warning('please enter your Date of birth');

    } else if (!this.email) {
      let element = document.getElementById('InputEmail1');
      element.classList.add('is-invalid');
      this.toastr.warning('please enter your email');

    } else if (!this.password) {
      let element = document.getElementById('InputPassword1');
      element.classList.add('is-invalid');
      this.toastr.warning('please enter your password');

    } else if (!this.mobile) {
      let element = document.getElementById('mobile1');
      element.classList.add('is-invalid');
      this.toastr.warning('please enter your Mobile Number');

    } else if (!this.image) {
      this.toastr.warning('please upload your image');

    } else {
      let formData = new FormData();
      formData.append('contactName', this.contactName);
      formData.append('dob', this.dob);
      formData.append('image', this.image);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('mobile', this.mobile);

      if (formData) {
        this.appService.signupFunction(formData).subscribe(
          (apiResponse) => {
            if (apiResponse.status === 200) {
              this.toastr.success('successfully signedup');
              setTimeout(() => {
                this.router.navigate(['']);
              }, 5000);
            } else {
              this.toastr.error(apiResponse.message);
            }
          },
          (err) => {
            this.toastr.error('error occured');
          }
        );
      }
    }
  }
}
