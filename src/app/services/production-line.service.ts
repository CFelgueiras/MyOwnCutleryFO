import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductionLine} from '../components/Factory/create-production-line/ProductionLine';

@Injectable({
  providedIn: 'root'
})
export class ProductionLineService {
  factoryApiURL: string = environment.backendMDFactoryBaseUrl;
  prodLineUrl = '/productionline';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Add a new Production Line with a list of machines
   */
  addProductionLine(productionLine: ProductionLine): Observable<ProductionLine> {
    return this.httpClient.post<ProductionLine>(this.factoryApiURL + this.prodLineUrl, {...productionLine}, this.httpOptions);
  }
}
