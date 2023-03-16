import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pro, product } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  particularAsset:undefined|pro[];
  constructor(private router:ActivatedRoute,private pro:UserserviceService) { }

  ngOnInit(): void {
    this.allProduct();
  }
  allProduct(){
    return this.pro.slrProductList().subscribe((result)=>{
      this.particularAsset=result;
    })
  }
  AddtoCart(id:string){
    
  }
}
