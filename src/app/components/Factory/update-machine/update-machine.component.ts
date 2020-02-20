import {Component, OnInit} from '@angular/core';
import {MachineUpdate} from './MachineUpdate';
import {MachineService} from '../../../services/machine.service';
import {Machine} from '../machine-search/Machine';
import {MachineType} from '../machine-type/Machine';

@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
  styleUrls: ['./update-machine.component.css']
})
export class UpdateMachineComponent implements OnInit {

  machineUpdate: MachineUpdate = new MachineUpdate();
  macArray: MachineUpdate[] = [];
  macList: any;
  mac: any;
  machTypeArray: MachineType[] = [];
  machType: MachineType = new MachineType();
  mt: any;
  machTypeList: any;

  constructor(
    private machineService: MachineService
  ) {
  }

  ngOnInit() {
    this.getAllMachine().then();
    this.getAllMachineTypes().then();
  }

  updateMachineType(): void {
    if (!this.machineUpdate.machineId) {
      alert('Machine ID field is mandatory.');
      return;
    }
    this.machineService.updateMachineType(this.machineUpdate)
      .subscribe();
    alert('Machine type was successfully updated.');
  }

  onUpdateMachineType(): void {
    this.updateMachineType();
    this.cleanObject();
  }

  async getAllMachine(): Promise<void> {
    this.macList = (await this.machineService.getAllMachine().toPromise()).valueOf();
    this.macArray = this.macList;
  }

  async getAllMachineTypes(): Promise<void> {
    this.machTypeList = (await this.machineService.getAllMachineType().toPromise()).valueOf();
    this.machTypeArray = this.machTypeList;
  }

  cleanObject(): void {
    this.machineUpdate.machineId = '';
    this.machineUpdate.machineTypeId = '';
  }
}
