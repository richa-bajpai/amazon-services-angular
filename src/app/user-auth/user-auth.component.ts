import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, login, product, signup } from '../datatype';
import { NewuserService } from '../service/newuser.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  uShowLogin=false;
  usrAuth:string="";
  
  constructor(private http:HttpClient, private router:Router,private user:NewuserService, private product:UserserviceService) { }

  ngOnInit(): void {
  }
  uSignup(data:signup){
    this.user.userSignup(data);
  }
  uLogin(data:any){
    this.user.userLogin(data);
    this.user.usrloginError.subscribe((isError)=>{
      if(isError){
       this.usrAuth ="please enter correct email or password"
      }
      else{
        this.localcarttoRemotecart();
      }
    })
  }
  openuserLogin(){
    this.uShowLogin=true
  }
  openuserSignup(){
    this.uShowLogin=false
  }
  localcarttoRemotecart(){
    let data =localStorage.getItem('localCart');
    let user =localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id;
    if(data){
      let cartdataList:product[] = JSON.parse(data);
      
      cartdataList.forEach((product:product, index)=>{
        let cartData:cart={
          ...product,
          productid:product.id,
          userId
        };
        delete cartData.id;
        setTimeout(()=>{
          this.product.Addtokrt(cartData).subscribe((result)=>{
            if(result){
              console.warn("product stored in DB")
            }
          })
        },500);
        if(cartdataList.length===index+1){
          localStorage.removeItem('localCart');
        }
      });
    }
    setTimeout(()=>{
      this.product.getcartList(userId);
    },2000);
  }
}
