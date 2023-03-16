import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-sellerproductdetails',
  templateUrl: './sellerproductdetails.component.html',
  styleUrls: ['./sellerproductdetails.component.css']
})
export class SellerproductdetailsComponent implements OnInit {
  Productdata:undefined|product;
  constructor(private activeroute:ActivatedRoute, private proId:UserserviceService) { }

  ngOnInit(): void {
    let productdetailsId=this.activeroute.snapshot.paramMap.get('productId');
    productdetailsId && this.proId.getProduct(productdetailsId).subscribe((result)=>{
      this.Productdata =result;
    })
  }

  
}
