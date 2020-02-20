import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModeComponent } from './product-mode.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MyOrdersComponent} from '../my-orders/my-orders.component';

describe('ProductModeComponent', () => {
  let component: ProductModeComponent;
  let fixture: ComponentFixture<ProductModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [ ProductModeComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
