import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientAreaService {

    backendGEUrl: string = environment.backendGEBaseUrl;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private httpClient: HttpClient
    ) {
    }

    /**
     * HTTP GET for order by  customer id.
     * @returns the API response.
     */
    getOrdersByCustomerId(customerId: string): Observable<object> {
        return this.httpClient.get(this.backendGEUrl + '/orders/user/' + customerId);
    }

    /**
     * HTTP GET for products with highest mode.
     * @returns the API response.
     */
    getProductsMode(): Observable<object> {
        return this.httpClient.get(this.backendGEUrl + '/orders/biggest');
    }

    /**
     * HTTP GET products best sellers.
     * @returns the API response.
     */
    getProductsBestSellers(): Observable<object> {
        return this.httpClient.get(this.backendGEUrl + '/orders/products/bestsellers');
    }
}
