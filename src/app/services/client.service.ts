import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Client} from '../components/OrdersManagement/create-client/client';
import {ClientUpdate} from '../components/OrdersManagement/update-client/clientUpdate';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  factoryApiURL: string = environment.backendGEBaseUrl;
  clientUrl = '/auth';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * HTTP GET for client by id.
   * @returns the API response.
   */
  getClientById(clientId: string): Observable<object> {
    return this.httpClient.get(this.factoryApiURL + '/users/user/' + clientId);
  }


  /**
   * POST: add a new client
   */
  addClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.factoryApiURL + this.clientUrl + '/signup', {...client}, this.httpOptions);
  }


  /**
   * PUT: update the client
   */
  updateClient(clientUpdate: ClientUpdate) {
    return this.httpClient.put<ClientUpdate>(this.factoryApiURL + this.clientUrl + '/users/user/', {...clientUpdate}, this.httpOptions);
  }

  /**
   * GET all clients
   */
  getAllClients(): Observable<object> {
    return this.httpClient.get(this.factoryApiURL + '/users/');
  }
}
