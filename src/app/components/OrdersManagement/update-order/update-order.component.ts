import {Component, OnInit} from '@angular/core';
import {OrderUpdate} from './orderUpdate';
import {OrderService} from '../../../services/order.service';

@Component({
    selector: 'app-update-order',
    templateUrl: './update-order.component.html',
    styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

    orderUpdate: OrderUpdate = new OrderUpdate();

    constructor(
        private orderService: OrderService
    ) {
    }

    ngOnInit() {
    }

    updateOrder(): void {
        if (!this.orderUpdate.id) {
            alert('Order id to be updated is mandatory.');
            return;
        }
        if (!this.orderUpdate.id_product) {
            alert('Product id to be ordered is mandatory.');
            return;
        }
        if (!this.orderUpdate.quantity) {
            alert('Quantity of product is mandatory.');
            return;
        }
        if (!this.orderUpdate.deliveryDate) {
            alert('Delivery date is mandatory.');
            return;
        }
        if (this.orderUpdate.id && this.orderUpdate.id_product && this.orderUpdate.quantity && this.orderUpdate.deliveryDate) {
            this.orderService.updateOrder(this.orderUpdate)
                .subscribe();
            alert('Order was successfully updated.');
        }
    }

    onUpdateOrder(): void {
        this.updateOrder();
        this.cleanObject();
    }

    cleanObject(): void {
        this.orderUpdate.id_product = '';
        this.orderUpdate.quantity = '';
        this.orderUpdate.deliveryDate = '';
    }
}
