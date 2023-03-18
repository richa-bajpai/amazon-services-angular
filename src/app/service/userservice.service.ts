
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable } from 'rxjs';
import { cart, login, pro, product, signup } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isUserloggedin = new BehaviorSubject<boolean>(false)
  slrloginError = new EventEmitter<boolean>(false);
  cartNewData = new EventEmitter<product[]|[]>();
  constructor(private http:HttpClient, private router:Router) { }
  slrSignup(data:signup){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
    this.isUserloggedin.next(true);
    localStorage.setItem('seller',JSON.stringify(result.body));
    this.router.navigate(['seller-home']);
    })
  }
  slrLogin(data:any){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
      else{
        this.slrloginError.emit(true);
      }
    })
  }
  slrProduct(data:product){
    this.http.post(`http://localhost:3000/sellerproduct`,data,{observe:'response'}).subscribe((result)=>{
    localStorage.setItem('seller',JSON.stringify(result.body));
    this.router.navigate(['seller-product']);
    })
  }
  slrProductList(){
  return this.http.get<pro[]>(`http://localhost:3000/sellerproduct`);
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/sellerproduct/${id}`);
  }
  dltProduct(id:string){
    return this.http.delete(`http://localhost:3000/sellerproduct/${id}`);
  }
  searchProduct(query:string){
    return this.http.get<pro[]>(`http://localhost:3000/sellerproduct?q=${query}`);
  }
  productAccesories(query:string){
    return this.http.get<pro[]>(`http://localhost:3000/sellerproduct?q=${query}`)
  }
  localAddtocart(data:product){
    let cartData=[];
    let localCart = localStorage.getItem('localCart');
    
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]));
       this.cartNewData.emit([data]);
     }
    else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
    }
    this.cartNewData.emit(cartData);
  }
  RemoveItem(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items:product[]= JSON.parse(cartData) ;
      items = items.filter((item:product)=>productId!==item.id);
        localStorage.setItem('loca  lCart',JSON.stringify(items));
        this.cartNewData.emit(items);
      }
  }
  Addtokrt(cartDta:cart){
    return this.http.post('http://localhost:3000/cart',cartDta);
  }
  getcartList(userId:product){
    return this.http.get<product[]>('http://localhost:3000/cart?userId='+userId,
    {observe:'response'}).subscribe((result)=>{
    console.warn(result);
    if(result && result.body){
      this.cartNewData.emit(result.body);
    }
  });
  }

  removeFromcart(cartId:number){
    return this.http.delete('http://localhost:3000/cart/'+cartId);

  }
}
