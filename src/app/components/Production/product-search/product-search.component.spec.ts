import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchComponent } from './product-search.component';
import {imports} from '../../../app.imports';
import {declarations} from '../../../app.declarations';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
