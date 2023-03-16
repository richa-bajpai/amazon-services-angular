import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from '../datatype';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
  
}
