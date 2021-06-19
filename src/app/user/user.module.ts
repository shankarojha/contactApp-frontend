import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from "ngx-toastr";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DpDatePickerModule } from "ng2-date-picker";


@NgModule({
  
  imports: [RouterModule.forChild([
    { path: 'signup', component: SignupComponent }     
  ]),
  CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    DpDatePickerModule
  ],
  exports: [LoginComponent, RouterModule, SignupComponent],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
