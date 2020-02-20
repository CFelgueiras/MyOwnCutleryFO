import {Component, OnInit} from '@angular/core';
import {MachineType, Operations} from './machine-type';
import {MachineService} from '../../../services/machine.service';

@Component({
  selector: 'app-create-machine-type',
  templateUrl: './create-machine-type.component.html',
  styleUrls: ['./create-machine-type.component.css']
})
export class CreateMachineTypeComponent implements OnInit {

  machineType: MachineType = new MachineType();
  operationId: string;
  operations: Operations[] = [];

  constructor(private machineService: MachineService) {
  }

  ngOnInit() {
  }

  addMachineType(): void {
    if (!this.machineType.Name) {
      alert('Machine type name is mandatory.');
      return;
    }
    this.machineType.Operations = this.operations;
    this.machineService.addMachineType(this.machineType)
      .subscribe();
    alert('Machine type successfully added.');
  }

  onAddMachineType(): void {
    this.addMachineType();
    this.cleanObject();
  }

  cleanObject(): void {
    this.machineType.Name = '';
    this.machineType.Operations = [];
    this.operations = [];
  }

  addOperationToMachine() {
    this.operations.push({OperationId: this.operationId});
    this.operationId = '';
  }
}
