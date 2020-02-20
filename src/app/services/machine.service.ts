import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Machine} from '../components/Factory/create-machine/Machine';
import {MachineType} from '../components/Factory/create-machine-type/machine-type';
import {MachineUpdate} from '../components/Factory/update-machine/MachineUpdate';
import {MachineTypeOperation} from '../components/Factory/update-machine-type-operation/MachineTypeOperation';

@Injectable({
    providedIn: 'root'
})
export class MachineService {
    factoryApiURL: string = environment.backendMDFactoryBaseUrl;
    machineUrl = '/machine';
    machineTypeUrl = '/machinetype';
    operationUrl = '/operation/';
    machineStatusUrl = '/machinestate';
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private httpClient: HttpClient
    ) {
    }

    /**
     * HTTP GET for machine by id.
     * @returns the API response.
     */
    getMachineById(machineId: string): Observable<object> {
        return this.httpClient.get(this.factoryApiURL + '/machine/' + machineId);
    }

    /**
     * HTTP GET for operations by machine id.
     * @returns the API response.
     */
    getOperationsByMachineId(machId: string): Observable<object> {
        return this.httpClient.get(this.factoryApiURL + this.machineTypeUrl +  '/machinetypeid/' + machId);
    }

    getAllMachine(): Observable<object> {
        return this.httpClient.get(this.factoryApiURL +
            '/machine');
    }

    getAllMachineType(): Observable<object> {
        return this.httpClient.get(this.factoryApiURL +
            '/machinetype');
    }

    /**
     * HTTP GET for machines by machine type id.
     * @returns the API response.
     */
    getMachineList(machtypeId: string): Observable<object> {
        return this.httpClient.get(this.factoryApiURL +
            '/machinetype/' + machtypeId);
    }

    /**
     * POST: add a new machine with machine type
     */
    addMachine(machine: Machine): Observable<Machine> {
        return this.httpClient.post<Machine>(this.factoryApiURL +
            this.machineUrl, {...machine}, this.httpOptions);
    }

    /**
     * POST: add a new machine type with a list of operations
     */
    addMachineType(machineType: MachineType): Observable<MachineType> {
        return this.httpClient.post<MachineType>(this.factoryApiURL +
            this.machineTypeUrl, {...machineType}, this.httpOptions);
    }

    /**
     * PUT: update the machine type
     */
    updateMachineType(machineUpdate: MachineUpdate) {
        return this.httpClient.put<MachineUpdate>(this.factoryApiURL +
            this.machineUrl, {...machineUpdate}, this.httpOptions);
    }

    /**
     * PUT: update the machine type operation
     */
    updateMachineTypeOperation(machineTypeOperation: MachineTypeOperation) {
        return this.httpClient.put<MachineTypeOperation>(this.factoryApiURL +
            this.operationUrl, {...machineTypeOperation}, this.httpOptions);
    }

    /**
     * PUT: update the machine state
     */
    updateMachineState(machineUpdate: MachineUpdate) {
        return this.httpClient.put<MachineUpdate>(this.factoryApiURL +
            this.machineUrl + this.machineStatusUrl, {...machineUpdate}, this.httpOptions);
    }
}
