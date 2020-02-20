import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMachineTypeOperationComponent } from './update-machine-type-operation.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';

describe('UpdateMachineTypeOperationComponent', () => {
  let component: UpdateMachineTypeOperationComponent;
  let fixture: ComponentFixture<UpdateMachineTypeOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [MachineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachineTypeOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when identification is empty', () => {
    spyOn(window, 'alert');
    component.machineTypeOperation.OperationId = '';
    component.updateMachineType();
    expect(window.alert).toHaveBeenCalledWith('Operation ID field is mandatory.');
  });

  it('should return true when MachineId is filled', () => {
    spyOn(window, 'alert');
    component.machineTypeOperation.OperationId = '2';
    component.updateMachineType();
    expect(window.alert).toHaveBeenCalledWith('Machine type operation was successfully updated.');
  });

});
