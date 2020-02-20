import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateOrderComponent} from './update-order.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {OrderService} from '../../../services/order.service';

describe('UpdateOrderComponent', () => {
    let component: UpdateOrderComponent;
    let fixture: ComponentFixture<UpdateOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations,
            imports,
            providers: [OrderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateOrderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return false when Order Id is empty', () => {
        spyOn(window, 'alert');
        component.orderUpdate.id = '';
        component.orderUpdate.id_product = 'a';
        component.orderUpdate.quantity = 'a';
        component.orderUpdate.deliveryDate = 'a';
        component.updateOrder();
        expect(window.alert).toHaveBeenCalledWith('Order id to be updated is mandatory.');
    });

    it('should return true when Order Id is filled', () => {
        spyOn(window, 'alert');
        component.orderUpdate.id = '1';
        component.orderUpdate.id_product = 'a';
        component.orderUpdate.quantity = '1';
        component.orderUpdate.deliveryDate = 'x';
        component.updateOrder();
        expect(window.alert).toHaveBeenCalledWith('Order was successfully updated.');
    });

    it('should call updateOrder Method when identification is filled', () => {
        const debugElement = fixture.debugElement;
        const machineService = debugElement.injector.get(OrderService);
        const spy = spyOn(machineService, 'updateOrder').and.callThrough();
        component.orderUpdate.id = '1';
        component.orderUpdate.id_product = 'a';
        component.orderUpdate.quantity = '1';
        component.orderUpdate.deliveryDate = 'x';
        component.updateOrder();
        expect(spy).toHaveBeenCalled();
    });
});
