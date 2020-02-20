import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';
import {ProductService} from '../../../services/product.service';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when name is empty', () => {
    spyOn(window, 'alert');
    component.product.Name = '';
    component.addProduct();
    expect(window.alert).toHaveBeenCalledWith('Product name is mandatory.');
  });

  it('should return true when name is filled', () => {
    spyOn(window, 'alert');
    component.product.Name = 'product2';
    component.addProduct()
    expect(window.alert).toHaveBeenCalledWith('Product successfully added.');
  });

  it('should call addProduct Method when name is filled', () => {
    const debugElement = fixture.debugElement;
    const productService = debugElement.injector.get(ProductService);
    const spy = spyOn(productService, 'addProduct').and.callThrough();
    component.product.Name = 'product2';
    component.addProduct()
    expect(spy).toHaveBeenCalled();
  });
});
