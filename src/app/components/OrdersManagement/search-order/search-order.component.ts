import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from './order';
import {Client4} from './order';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class OrderSearchComponent implements OnInit {

  order: any;
  order2: Order = new Order();

  clientID: string;

  oObj: Order = new Order();
  o: any;
  oList: any;
  oArray: Order[] = [];

  client: any;
  client2: Client4 = new Client4();

  constructor(
    private orderService: OrderService,
    private  clientService: ClientService,
  ) {}

  ngOnInit() {
    this.getAllOrders().then();
  }

  /**
   * Get order by id and feed it to the html.
   */
  async getOrderByID(): Promise<void> {
    this.order = (await this.orderService.getOrderById(this.oObj._id).toPromise()).valueOf();
    this.order2 = this.order;
    this.clientID = this.order2.client_id;

  }
  onGetOrderClick(): void {
    this.getOrderByID().then();
    this.getClientByID().then();
  }

  async getAllOrders(): Promise<void> {
    this.oList = (await this.orderService.getAllOrders().toPromise()).valueOf();
    this.oArray = this.oList;
  }

  async getClientByID(): Promise<void> {
    this.client = (await this.clientService.getClientById(this.clientID).toPromise()).valueOf();
    this.client2 = this.client;
  }
}
