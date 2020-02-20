import { Component, OnInit } from '@angular/core';
import {MachineUpdate} from '../update-machine/MachineUpdate';
import {MachineService} from '../../../services/machine.service';
import {Machine} from '../machine-search/Machine';


@Component({
  selector: 'app-change-machine-state',
  templateUrl: './change-machine-state.component.html',
  styleUrls: ['./change-machine-state.component.css']
})
export class ChangeMachineStateComponent implements OnInit {

  machine2: MachineUpdate = new MachineUpdate();
  macList: any;
  // machine2: Machine = new Machine();
  macArray: Machine[] = [];

  constructor(
      private machineService: MachineService
  ) { }

  ngOnInit() {
    this.getAllMachine().then();
  }

  changeMachineState(): void {
    this.machineService.updateMachineState(this.machine2)
        .subscribe();
    alert('Machine state was successfully updated.');
  }

  onUpdateMachineState(): void {
    this.changeMachineState();
    this.cleanObject();
  }

  async getAllMachine(): Promise<void> {
    this.macList = (await this.machineService.getAllMachine().toPromise()).valueOf();
    this.macArray = this.macList;
  }

  cleanObject(): void {
    this.machine2.identification = '';
    this.machine2.State = false;
  }

}
