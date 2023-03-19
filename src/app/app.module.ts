import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';
import { SellerproductdetailsComponent } from './sellerproductdetails/sellerproductdetails.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProfileComponent } from './profile/profile.component';
import { UsercartComponent } from './usercart/usercart.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UserproductdetailComponent } from './userproductdetail/userproductdetail.component';
import { UsercheckoutComponent } from './usercheckout/usercheckout.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SellerhomeComponent,
    SellerAuthComponent,
    AboutusComponent,
    HomeComponent,
    SellerproductComponent,
    SellerproductdetailsComponent,
    UserAuthComponent,
    UserhomeComponent,
    ProfileComponent,
    UsercartComponent,
    SearchproductComponent,
    UserproductdetailComponent,
    UsercheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
