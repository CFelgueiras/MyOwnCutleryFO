import {Component, OnInit} from '@angular/core';
import {MachineService} from '../../../services/machine.service';
import {Machine, MachineType} from './Machine';

@Component({
  selector: 'app-machine-type',
  templateUrl: './machine-type.component.html',
  styleUrls: ['./machine-type.component.css']
})
export class MachineTypeComponent implements OnInit {
  machList: any;

  mach: Machine = new Machine();
  machTypeList: any;
  mt: any;
  macharray: Machine[] = [];
  machTypeArray: MachineType[] = [];
  machType: MachineType = new MachineType();

  constructor(private machineService: MachineService) {
  }

  ngOnInit() {
    this.getAllMachineTypes().then;
  }

  /**
   * Get machines by machine type id and feed it to the html.
   */
  async getMachineList(): Promise<void> {
    this.machList = (await this.machineService.getMachineList(this.machType.machineTypeId).toPromise()).valueOf();
    this.macharray = this.machList.machines;
  }

  async getAllMachineTypes(): Promise<void> {
    this.machTypeList = (await this.machineService.getAllMachineType().toPromise()).valueOf();
    this.machTypeArray = this.machTypeList;
  }

  onGetMachineByTypeClick(): void {
    this.getMachineList().then();
  }
}
