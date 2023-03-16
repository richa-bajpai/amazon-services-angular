import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  ShowLogin = false;
  sellerauther:string=""
  constructor(private user:UserserviceService) { }

  ngOnInit(): void {
  }
  sSignup(data:any){
    this.user.slrSignup(data);
  }
  sLogin(data:any){
    this.user.slrLogin(data);
    this.user.slrloginError.subscribe((isError)=>{
      if(isError){
        this.sellerauther="please enter correct email or password"
      }
    })
  }
  opensellerSignup(){
    this.ShowLogin=false
  }
  opensellerLogin(){
    this.ShowLogin=true
  }
}
