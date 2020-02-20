import {Component, OnInit} from '@angular/core';
import {Order} from './order';
import {OrderService} from '../../../services/order.service';
import {Product} from '../../Production/product-search/Product';
import {ProductService} from '../../../services/product.service';
import {Client3} from '../search-client/client';
import {ClientService} from '../../../services/client.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order: Order = new Order();
  created: string;

  prodList: any;
  clList: any;
  prodArray: Product[] = [];
  clArray: Client3[] = [];
  productObj: Product = new Product();
  clObj: Client3 = new Client3();
  product: any;

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private clientService: ClientService
  ) {
  }

  ngOnInit() {
    this.getAllProducts().then();
    this.getAllClients().then();
  }

  addOrder(): void {
    if (!this.order.client_id) {
      alert('Client is mandatory.');
      return;
    }
    if (!this.order.id_product) {
      alert('Product is mandatory.');
      return;
    }
    if (!this.order.quantity) {
      alert('Quantity of product is mandatory.');
      return;
    }
    if (!this.order.deliveryDateRequested) {
      alert('Delivery date is mandatory.');
      return;
    }
    this.orderService.addOrder(this.order)
      .subscribe();
    alert('Order successfully added.');
  }
  onAddOrder(): void {
    this.addOrder();
    this.cleanObject();
  }

  cleanObject(): void {
    this.order.id_product = '';
    this.order.quantity = '';
    this.order.deliveryDateRequested = '';
  }

  async getAllProducts(): Promise<void> {
    this.prodList = (await this.productService.getAllProducts().toPromise()).valueOf();
    this.prodArray = this.prodList;
  }

  async getAllClients(): Promise<void> {
    this.clList = (await this.clientService.getAllClients().toPromise()).valueOf();
    this.clArray = this.clList;
  }

}
