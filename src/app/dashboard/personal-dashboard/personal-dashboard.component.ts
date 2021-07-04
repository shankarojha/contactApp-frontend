import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.css'],
})
export class PersonalDashboardComponent implements OnInit {
  public contacts = [];
  public myUserId = Cookie.get('userId');
  public myImagePath = Cookie.get('imagePath');
  public myName = Cookie.get('contactName');
  public myMobile = Cookie.get('mobile');
  public myEmail = Cookie.get('email');
  public totalContactsinDB: any;
  public skip = 0;
  public limit = 10;

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.getCount();
    this.getAllContacts();
  }

  getCount(): any {
    this.appService.getCount().subscribe((data) => {
      if (data.status === 200) {
        this.totalContactsinDB = data.data;
        console.log('the total data is', this.totalContactsinDB);
      } else {
        console.log('cannot get data');
      }
    });
  }

  getAllContacts(): any {
    this.appService
      .getPaginatedContacts(this.skip, this.limit)
      .subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          for (let x of apiResponse.data) {
            let temp = {
              contactName: x.contactName,
              userId: x.userId,
              dob: x.dob.toLocaleString(),
              imagepath: x.imagePath,
              mobile: x.mobile,
              email: x.email,
              dateJoined: x.joinedOn
            };
            
            /* getting the status of a user */
            let d1:any = new Date()
            let d2:any = new Date(x.joinedOn)
            let diff = Math.round((d1-d2)/(1000*3600*24))
            if(diff>30){
              temp["status"] = "Homie"
            } else if(diff<30 && diff>10){
              temp["status"] = "Homie to be"
            } else{
              temp["status"] = "Newbie"
            }
            this.contacts.push(temp);
          }
          /* store all contacts except user's in contacts array */
          let indexOfMyContact = this.contacts.findIndex(
            (x) => x.userId == this.myUserId
          );
          this.contacts.splice(indexOfMyContact, 1);
          console.log(this.contacts);

          // let duration =  
        }
      });
  } // end getAllContacts

  setContactClicked(selectedUserId): any {
    Cookie.set('selectedUserId', selectedUserId);
  }

  increasepagination(): any {
    this.skip += 3;
    console.log(this.skip);
    this.getAllContacts();
  }
}
