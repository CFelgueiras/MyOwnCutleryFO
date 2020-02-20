import {Component, OnChanges, OnInit} from '@angular/core';
import {MachineService} from '../../../services/machine.service';
import {Machine} from './Machine';
import {Operation} from '../../Production/manufacturing-plan-search/Operation';

@Component({
  selector: 'app-machine-table',
  templateUrl: './machine-search.component.html',
  styleUrls: ['./machine-search.component.css']
})
export class MachineSearchComponent implements OnInit, OnChanges {

  machine: any;
  machine2: Machine = new Machine();
  macArray: Machine[] = [];
  machineId: string;
  macList: any;
  mac: any;

  constructor(
    private machineService: MachineService
  ) {}

  ngOnInit() {

    this.getAllMachine().then();
  }

  /**
   * Get machine by id and feed it to the html.
   */
  async ngOnChanges(): Promise<void> {
    this.machine = (await this.machineService.getMachineById(this.machine2.machineId).toPromise()).valueOf();
    this.machine2 = this.machine;
  }

  async getAllMachine(): Promise<void> {
    this.macList = (await this.machineService.getAllMachine().toPromise()).valueOf();
    this.macArray = this.macList;
  }

  onGetMachineClick(): void {
    this.ngOnChanges().then();
  }
}
