import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../components/Production/create-product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productionApiURL: string = environment.backendMDProductionBaseUrl;
  productUrl = '/product/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * HTTP GET for product by id.
   * @returns the API response.
   */
  getProductById(productId: string): Observable<object> {
    return this.httpClient.get(this.productionApiURL + this.productUrl + productId);
  }

  /**
   * POST: add a new product with a manufacturing plan
   */
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.productionApiURL + '/Product', {...product}, this.httpOptions);
  }

  /**
   * GET all products
   */
  getAllProducts(): Observable<object> {
    return this.httpClient.get(this.productionApiURL + this.productUrl);
  }
}
