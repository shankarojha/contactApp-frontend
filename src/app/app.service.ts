import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private url = 'http://127.0.0.1:3000'

  constructor(private http:HttpClient, private router: Router) {}

  public getUserInfoFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('userInfo'))
  }

  public setUserInfoToLocalStorage = (data) => {
    localStorage.setItem('userInfo',JSON.stringify(data))
  }

  public signupFunction(file):Observable<any>{
    return this.http.post(`${this.url}/signup`,file);
  }

  public loginFunction(data):Observable<any>{
    const params= new HttpParams()
    .set('email',data.email)
    .set('password',data.password)
    return this.http.post(`${this.url}/login`,params) 
  }

  public getSingleContact(userId):Observable<any>{
    return this.http.get(`${this.url}/getsinglecontact/${userId}`)
  }

  public getAllContacts():Observable<any>{
    return this.http.get(`${this.url}/getContacts`)
  }

  public getCount():Observable<any>{
    return this.http.get(`${this.url}/getTotalNumberOfContacts`)
  }

  public getPaginatedContacts(skip,limit):Observable<any>{
    return this.http.get(`${this.url}/getContactsPagination?skip=${skip}&limit=${limit}`)
  }

  
}
