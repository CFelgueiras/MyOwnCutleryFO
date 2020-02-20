import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFastestToCreateComponent } from './product-fastest-to-create.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';

describe('ProductFastestToCreateComponent', () => {
  let component: ProductFastestToCreateComponent;
  let fixture: ComponentFixture<ProductFastestToCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [ ProductFastestToCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFastestToCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
