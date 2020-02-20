import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufacturingPlanService {

  productionApiURL: string = environment.backendMDProductionBaseUrl;
  manPlanUrl = '/ManufacturingPlan/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * HTTP GET for manufacturing plan by id.
   * @returns the API response.
   */
  getManufacturingPlanById(manPlanId: string): Observable<object> {
    return this.httpClient.get(this.productionApiURL + this.manPlanUrl + manPlanId);
  }

  /**
   * HTTP GET all manufacturingPlans
   */
  getAllManufacturingPlans(): Observable<object> {
    return this.httpClient.get(this.productionApiURL + this.manPlanUrl
        );
}

}
