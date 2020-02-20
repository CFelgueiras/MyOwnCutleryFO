import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Operation} from '../components/Factory/create-operation/operation';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  factoryApiURL: string = environment.backendMDFactoryBaseUrl;
  operationsUrl = '/operation';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient) {

  }

  /** POST: add a new operation to the server */
  // tslint:disable-next-line:max-line-length variable-Name
  addOperation(operation: Operation): Observable<Operation> {
    return this.httpClient.post<Operation>(this.factoryApiURL + this.operationsUrl, {...operation}, this.httpOptions);
  }
}
