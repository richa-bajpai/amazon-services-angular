import { Component, OnInit } from '@angular/core';
import { pro } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-sellerproduct',
  templateUrl: './sellerproduct.component.html',
  styleUrls: ['./sellerproduct.component.css']
})
export class SellerproductComponent implements OnInit {
  slrproduct:undefined|pro[];
  constructor(private list:UserserviceService) { }

  ngOnInit(): void {
    this.slrproductAll();
  }
  slrproductAll(){
    return this.list.slrProductList().subscribe((result)=>{
      this.slrproduct=result;
    })
  }
  deleteproduct(id:string){
    this.list.dltProduct(id).subscribe((result)=>{
      if(result){
        this.slrproductAll();
      }
    });
  }
}
