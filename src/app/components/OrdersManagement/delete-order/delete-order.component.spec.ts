import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderComponent } from './delete-order.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {OrderService} from '../../../services/order.service';

describe('UpdateOrderComponent', () => {
  let component: DeleteOrderComponent;
  let fixture: ComponentFixture<DeleteOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when Order Id is empty', () => {
    spyOn(window, 'alert');
    component.orderDelete.id = '';
    component.deleteOrder();
    expect(window.alert).toHaveBeenCalledWith('Order ID field is mandatory.');
  });

  it('should return true when Client Id is filled', () => {
    spyOn(window, 'alert');
    component.orderDelete.id = '1';
    component.deleteOrder();
    expect(window.alert).toHaveBeenCalledWith('Order was successfully updated.');
  });

  it('should call updateClient Method when identification is filled', () => {
    const debugElement = fixture.debugElement;
    const machineService = debugElement.injector.get(OrderService);
    const spy = spyOn(machineService, 'deleteOrder').and.callThrough();
    component.orderDelete.id = '1';
    component.deleteOrder();
    expect(spy).toHaveBeenCalled();
  });
});
