import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [PersonalDashboardComponent, ContactDetailsComponent, EditDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ]
})
export class DashboardModule { }
