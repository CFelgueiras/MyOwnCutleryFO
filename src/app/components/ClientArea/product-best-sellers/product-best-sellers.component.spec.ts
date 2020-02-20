import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBestSellersComponent } from './product-best-sellers.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';

describe('ProductBestSellersComponent', () => {
  let component: ProductBestSellersComponent;
  let fixture: ComponentFixture<ProductBestSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [ ProductBestSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
