import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerproductdetailsComponent } from './sellerproductdetails.component';

describe('SellerproductdetailsComponent', () => {
  let component: SellerproductdetailsComponent;
  let fixture: ComponentFixture<SellerproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerproductdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
