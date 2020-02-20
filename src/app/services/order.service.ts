import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Order} from '../components/OrdersManagement/create-order/order';
import {OrderUpdate} from '../components/OrdersManagement/update-order/orderUpdate';
import {OrderDelete} from '../components/OrdersManagement/delete-order/orderDelete';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  geApiUrl: string = environment.backendGEBaseUrl;
  orderUrl = '/orders';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * HTTP GET for order by id.
   * @returns the API response.
   */
  getOrderById(orderId: string): Observable<object> {
    return this.httpClient.get(this.geApiUrl + '/orders/order/' + orderId);
  }


  /**
   * POST: add a new order
   */
  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.geApiUrl + this.orderUrl + '/order/', {...order}, this.httpOptions);
  }


  /**
   * PUT: update the order
   */
  updateOrder(orderUpdate: OrderUpdate) {
    return this.httpClient.put<OrderUpdate>(this.geApiUrl + this.orderUrl + '/order/', {...orderUpdate}, this.httpOptions);
  }

  /**
   * DELETE: delete the order
   */
  deleteOrder(orderDelete: OrderDelete) {
    return this.httpClient.put<OrderDelete>(this.geApiUrl + this.orderUrl + '/order/', {...orderDelete}, this.httpOptions);
  }

  /**
   * GET all orders
   */
  getAllOrders(): Observable<object> {
    return this.httpClient.get(this.geApiUrl + '/orders/');
  }


}
