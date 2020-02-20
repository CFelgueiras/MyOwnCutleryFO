import {Component, OnInit} from '@angular/core';
import {ClientAreaService} from '../../../services/client-area.service';
import {Client4, Order} from '../../OrdersManagement/search-order/order';
import {ClientService} from '../../../services/client.service';
import {OrderService} from '../../../services/order.service';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

    ordersList: any;
    customerId: string;

    clList: any;
    clArray: Client4[] = [];
    clObj: Client4 = new Client4();

    oList: any;
    oArray: Order[] = [];
    oObj: Order = new Order();

    ord: any;

    constructor(
        private clientAreaService: ClientAreaService,
        private  clientService: ClientService,
        private orderService: OrderService,
    ) {
    }

    ngOnInit() {
        // this.getOrderByCustomerID();
        this.getAllClients().then();

    }

    /**
     * Get orders by customer id and feed it to the html.
     */
    async getOrderByCustomerID(): Promise<void> {
        this.ordersList = (await this.clientAreaService.getOrdersByCustomerId(this.clObj._id).toPromise()).valueOf();

        this.getAllOrders().then();
    }

    async getAllClients(): Promise<void> {
        this.clList = (await this.clientService.getAllClients().toPromise()).valueOf();
        this.clArray = this.clList;
    }

    async getAllOrders(): Promise<void> {
        this.oList = (await this.orderService.getAllOrders().toPromise()).valueOf();
        this.oArray = this.oList;
    }

    onGetOrderClick(): void {
        this.getOrderByCustomerID().then();
    }
}
