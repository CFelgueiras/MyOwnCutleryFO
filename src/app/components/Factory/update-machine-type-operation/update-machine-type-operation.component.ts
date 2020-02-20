import { Component, OnInit } from '@angular/core';
import {MachineTypeOperation} from './MachineTypeOperation';
import {MachineService} from '../../../services/machine.service';

@Component({
  selector: 'app-update-machine-type-operation',
  templateUrl: './update-machine-type-operation.component.html',
  styleUrls: ['./update-machine-type-operation.component.css']
})
export class UpdateMachineTypeOperationComponent implements OnInit {

  machineTypeOperation: MachineTypeOperation = new MachineTypeOperation();

  constructor(private machineService: MachineService) { }

  ngOnInit() {
  }
  updateMachineType(): void {
    if (!this.machineTypeOperation.OperationId) {
      alert('Operation ID field is mandatory.');
      return;
    }
    this.machineService.updateMachineTypeOperation(this.machineTypeOperation)
      .subscribe();
    alert('Machine type operation was successfully updated.');
  }

  onUpdateMachineType(): void {
    this.updateMachineType();
    this.cleanObject();
  }

  cleanObject(): void {
    this.machineTypeOperation.OperationId = '';
    this.machineTypeOperation.MachineTypeId = '';
  }
}
