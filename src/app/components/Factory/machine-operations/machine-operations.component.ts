import {Component, OnInit} from '@angular/core';
import {MachineService} from '../../../services/machine.service';
import {Operation} from './Operation';
import {MachineType} from '../machine-type/Machine';
import {Jorge} from './jorge';

@Component({
    selector: 'app-machine-operations',
    templateUrl: './machine-operations.component.html',
    styleUrls: ['./machine-operations.component.css']
})
export class MachineOperationsComponent implements OnInit {
    machineTypeId: string;
    operationsList: any;
    mt: any;
    operation: Operation[] = [];
    machTypeList: any;
    machTypeArray: MachineType[] = [];
    machType: MachineType = new MachineType();

    constructor(private machineService: MachineService) {
    }

    ngOnInit() {
        this.getAllMachineTypes().then();
    }

    /**
     * Get operations by machine id and feed it to the html.
     */
    async getOperationsByMachineId(): Promise<void> {
        this.operationsList = (await this.machineService.getOperationsByMachineId(this.machType.machineTypeId).toPromise()).valueOf();
        this.operation = this.operationsList;
    }

    async getAllMachineTypes(): Promise<void> {
        this.machTypeList = (await this.machineService.getAllMachineType().toPromise()).valueOf();
        this.machTypeArray = this.machTypeList;
    }

    onGetOperationsClick(): void {
        this.getOperationsByMachineId().then();
    }
}
