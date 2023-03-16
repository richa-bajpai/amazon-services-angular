import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pro, product } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
searchpro:undefined|pro[];
  constructor(private activeroute:ActivatedRoute, private pro:UserserviceService) { }
  
  ngOnInit(): void {
    let query = this.activeroute.snapshot.paramMap.get('query');
    query && this.pro.searchProduct(query).subscribe((result)=>{
      this.searchpro = result;
      
    })
  }

}
