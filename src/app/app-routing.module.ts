import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';
import { SellerproductdetailsComponent } from './sellerproductdetails/sellerproductdetails.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UsercheckoutComponent } from './usercheckout/usercheckout.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserproductdetailComponent } from './userproductdetail/userproductdetail.component';


const routes: Routes = [{
  path:'',component:HomeComponent
},{
  path:'seller-auth',component:SellerAuthComponent
},{
  path:'aboutus',component:AboutusComponent
},
{
  path:'seller-home',component:SellerhomeComponent
},
{
  path:'seller-product',component:SellerproductComponent
},
{
  path:'slrview-details/:productId',component:SellerproductdetailsComponent
},
{
  path:'user-auth',component:UserAuthComponent
},
{
  path:'user-home',component:UserhomeComponent
},
{
  path:'profile',component:ProfileComponent
},
{
  path:'usercart',component:UsercartComponent
},
{
  path:'search/:query',component:SearchproductComponent
},
{
  path:'user-view/:productId',component:UserproductdetailComponent
},
{
  path:'usercheckout',component:UsercheckoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
