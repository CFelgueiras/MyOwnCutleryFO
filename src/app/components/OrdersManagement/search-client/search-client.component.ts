import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {Client3} from './client';

@Component({
  selector: 'app-client-table',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class ClientSearchComponent implements OnInit {

  client: any;
  client2: Client3 = new Client3();

  clObj: Client3 = new Client3();
  cl: any;
  clList: any;
  clArray: Client3[] = [];

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.getAllClients().then();
  }

  /**
   * Get client by id and feed it to the html.
   */
  async getClientByID(): Promise<void> {
    this.client = (await this.clientService.getClientById(this.clObj._id).toPromise()).valueOf();
    this.client2 = this.client;
  }

  async getAllClients(): Promise<void> {
    this.clList = (await this.clientService.getAllClients().toPromise()).valueOf();
    this.clArray = this.clList;
  }

  onGetClientClick(): void {
    this.getClientByID().then();
  }
}
