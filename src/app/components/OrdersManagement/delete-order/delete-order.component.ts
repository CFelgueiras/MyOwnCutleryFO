import {Component, OnInit} from '@angular/core';
import {OrderDelete} from './orderDelete';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent implements OnInit {

  orderDelete: OrderDelete = new OrderDelete();

  constructor(
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
  }

  deleteOrder(): void {
    if (!this.orderDelete.id) {
      alert('Order ID field is mandatory.');
      return;
    }
    this.orderService.deleteOrder(this.orderDelete)
      .subscribe();
    alert('Order was successfully updated.');
  }

  onDeleteOrder(): void {
    this.deleteOrder();
    this.cleanObject();
  }

  cleanObject(): void {
    this.orderDelete.id = '';
  }
}
