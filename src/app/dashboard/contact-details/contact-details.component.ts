import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  public contactUserId = Cookie.get('selectedUserId')

  constructor() { }

  ngOnInit(): void {
  }

}
