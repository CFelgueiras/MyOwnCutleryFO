import {Component, OnInit} from '@angular/core';
import {Machine} from './Machine';
import {MachineService} from '../../../services/machine.service';
import {MachineType} from '../machine-type/Machine';

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.css']
})
export class CreateMachineComponent implements OnInit {

  machine: Machine = new Machine();
  machTypeList: any;
  mt: any;
  machTypeArray: MachineType[] = [];
  machType: MachineType = new MachineType();
  created: string;

  constructor(
    private machineService: MachineService
  ) {
  }

  ngOnInit() {

    this.getAllMachineTypes().then;
  }

  AddMachine(): void {
    if (!this.machine.Identification) {
      alert('Machine identification is mandatory.');
      return;
    }
    this.machineService.addMachine(this.machine)
      .subscribe();
    alert('Machine successfully added.');
  }

  onAddMachine(): void {
    this.AddMachine();
    this.cleanObject();
  }

  cleanObject(): void {
    this.machine.Identification = '';
    this.machine.Brand = '';
    this.machine.Model = '';
    this.machine.Localization = '';
    this.machine.Capacity = '';
    this.machine.MachineTypeId = '';
    this.machine.State = false;
  }

  async getAllMachineTypes(): Promise<void> {
    this.machTypeList = (await this.machineService.getAllMachineType().toPromise()).valueOf();
    this.machTypeArray = this.machTypeList;
  }
}
