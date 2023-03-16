import { Component, OnInit } from '@angular/core';
import { product } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {

  constructor(private slrproduct:UserserviceService) { }

  ngOnInit(): void {
  }
  AddProduct(data:product){
    this.slrproduct.slrProduct(data);
  }

}
