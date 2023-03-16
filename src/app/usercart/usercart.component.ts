import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  userProductCart:undefined|product;
  productQuantity:number=1;
  constructor(private router:ActivatedRoute,private pro:UserserviceService) { }

  ngOnInit(): void {
    let userproductId = this.router.snapshot.paramMap.get('productId');
    userproductId && this.pro.getProduct(userproductId).subscribe((result)=>{
      this.userProductCart= result;
      this.Showdata();
    })
  
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='max')
    {
      this.productQuantity +=1;
    }
    else if(this.productQuantity>1 && val ==='min')
    {
      this.productQuantity -=1;
    }
  }
  
  Showdata(){
    let cartData=[];
    let localCart = localStorage.getItem('localCart');
    let localData = localCart && JSON.parse(localCart)[0];
    cartData = localData?.id;
    console.warn(cartData)
  }

}
