import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';
import { DatePickerComponent } from 'ng2-date-picker';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  constructor(private router:Router, private toastr:ToastrService, private appService:AppService) { }

  ngOnInit(): void {
    this.getUserData()
  }
public getUserData():any{
  
}
}
