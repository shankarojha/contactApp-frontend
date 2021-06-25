import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
  { path: 'personaldashboard', component: PersonalDashboardComponent },
  { path: 'contactdetails', component: ContactDetailsComponent },
  { path: 'editdetails', component: EditDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
