import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-userproductdetail',
  templateUrl: './userproductdetail.component.html',
  styleUrls: ['./userproductdetail.component.css']
})
export class UserproductdetailComponent implements OnInit {
  productdetailsData:undefined|product;
  productQuantity:number=1;
  removeCart = false;
  userId:undefined|string;
  product: any;
  constructor(private router:ActivatedRoute,private pro:UserserviceService) { }

  ngOnInit(): void {
    let producdetailId = this.router.snapshot.paramMap.get('productId');
    producdetailId && this.pro.getProduct(producdetailId).subscribe((result)=>{
      this.productdetailsData = result;
      
      let cartData = localStorage.getItem('localCart');
      if(producdetailId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:product)=>producdetailId==item.id.toString())
        if(items.length){
          this.removeCart= true;
        }
        else{
          this.removeCart =false;
        }
      }
      let user = localStorage.getItem('user');
        if(user){
          let userdta = user && JSON.parse(user)[0];
          let userId = userdta?.id;
          this.pro.getcartList(userId); 
          this.pro.cartNewData.subscribe((result)=>{
            let item= result.filter((item:product)=>producdetailId?.toString()===item.productid?.toString())
            if(item.length){
              this.product.cartNewData=item[0];
              this.removeCart= true;
            }
          })
        }
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
  AddTocart(){
    if(this.productdetailsData){
      this.productdetailsData.quantity=this.productQuantity;
      if(!localStorage.getItem('user')){
        this.pro.localAddtocart(this.productdetailsData);
        this.removeCart= true;
      }
      else{
          let user = localStorage.getItem('user');
          let userdta = user && JSON.parse(user)[0];
          let userId = userdta?.id;
          let cartDta:cart={
            ...this.productdetailsData,userId,
            productid:this.productdetailsData.id,
          }
          
          delete cartDta.id;
          this.pro.Addtokrt(cartDta).subscribe((result:any)=>{
            if(result){
              this.pro.getcartList(userId); 
              this.removeCart= true;
            }
          })
        
       }
 
    }
  }
  RemovetoCart(productId:number){ 
    this.pro.RemoveItem(productId); 
    this.removeCart =false;
  }
}
