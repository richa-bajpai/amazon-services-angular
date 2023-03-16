import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter,Injectable } from '@angular/core';

import { login, signup } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {
  isnewuserLoggedin = new BehaviorSubject<boolean>(false);
  usrloginError = new EventEmitter<boolean>(false);
  constructor(private http:HttpClient, private router:Router) { }

  userSignup(data:signup){
    this.http.post(`http://localhost:3000/user`,data,{observe:'response'}).subscribe((result:any)=>{
    this.isnewuserLoggedin.next(true);
    localStorage.setItem('user',JSON.stringify(result.body));
    this.router.navigate(['user-home']);
    })
  }
  userLogin(data:any){
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
    if(result && result.body && result.body.length){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['user-home']);
    }
    else{
      this.usrloginError.emit(true);
    }
    })
  }
}
