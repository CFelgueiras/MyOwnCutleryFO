import {Component, OnInit} from '@angular/core';
import {ClientUpdate} from './clientUpdate';
import {ClientService} from '../../../services/client.service';

@Component({
    selector: 'app-update-client',
    templateUrl: './update-client.component.html',
    styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

    clientUpdate: ClientUpdate = new ClientUpdate();

    constructor(
        private clientService: ClientService
    ) {
    }

    ngOnInit() {
    }

    updateClient(): void {
        if (!this.clientUpdate.id) {
            alert('Client ID field is mandatory.');
        }
        if (!this.clientUpdate.name) {
            alert('Client name is mandatory.');
            return;
        }
        if (!this.clientUpdate.email) {
            alert('Client email is mandatory.');
            return;
        }
        if (!this.clientUpdate.address) {
            alert('Client address is mandatory.');
            return;
        }
        if (this.clientUpdate.id && this.clientUpdate.name && this.clientUpdate.email && this.clientUpdate.address) {
            this.clientService.updateClient(this.clientUpdate)
                .subscribe();
            alert('Client was successfully updated.');
        }
    }

    onUpdateClient(): void {
        this.updateClient();
        this.cleanObject();
    }

    cleanObject(): void {
        this.clientUpdate.name = '';
        this.clientUpdate.email = '';
        this.clientUpdate.address = '';
    }
}
