import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pro } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  slrName:undefined|string="";
  uName:undefined|string="";
  srchpro:undefined|pro[];
  cartItem=0;
  constructor(private router:Router, private pro:UserserviceService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let slrList = localStorage.getItem('seller');
          let slrData = slrList && JSON.parse(slrList)[0];
          this.slrName= slrData.username;
          this.menuType='seller';
        }
        else if(localStorage.getItem('user')){
          let uList =localStorage.getItem('user');
          let uData = uList && JSON.parse(uList)[0];
          this.uName = uData.username;
          this.menuType ='user';
          this.pro.getcartList(uData.id);
        }
        else{
          this.menuType='default'
        }
      }
    })
    let cartData = localStorage.getItem('localCart');
  if(cartData){
    this.cartItem = JSON.parse(cartData).length
  }
  this.pro.cartNewData.subscribe((item)=>{
    this.cartItem = item.length;
  })
  };
  
  slrLogout(){
    localStorage.removeItem('seller');
    this.router.navigate(["/"]);
  }
  userLogout(){
    localStorage.removeItem('user');
    this.router.navigate(["/"]);
     this.pro.cartNewData.emit([]);
  }
  submitSearch(val:string){
    this.router.navigate([`search/${val}`]);
  }
  searchResult(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.pro.searchProduct(element.value).subscribe((result)=>{
        this.srchpro = result;
        if(result.length>5){
          result.length =5;
        }
        console.warn(result);

      })
    }
  }
  hidesearch(){
    this.srchpro=undefined;
  }
  redirectToDetails(id:string){
    this.router.navigate(['/slrview-details/'+id]);
  }
}
