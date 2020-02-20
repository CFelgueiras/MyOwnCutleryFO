import {Component, OnInit } from '@angular/core';
import {Client} from './client';
import {DataCheck} from './client';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client2: Client = new Client();
  dataCheck: DataCheck = new DataCheck();
  created: string;
  constructor(
    private clientService: ClientService
  ) {
  }

  ngOnInit() {
  }


  addClient(): void {
    if (!this.client2.name) {
      alert('Must add name');
      return;
    }

    if (!this.client2.email) {
      alert('Must add email');
      return;
    }

    if (!this.client2.address) {
      alert('Must add address.');
      return;
    }

    if (!this.client2.password) {
      alert('Must add password.');
      return;
    }

    if (this.client2.password !== this.dataCheck.password2) {
      alert('The password must be the same.');
      return;
    }

    if (!this.dataCheck.agree) {
      alert('Must agree with RGPD.');
      return;
    }

    this.clientService.addClient(this.client2)
      .subscribe();
    alert('Client successfully added.');
  }

  onAddClient(): void {
    this.addClient();
    this.cleanObject();
  }

  cleanObject(): void {
    this.client2.name = '';
    this.client2.email = '';
    this.client2.address = '';
    this.client2.password = '';
  }

}
