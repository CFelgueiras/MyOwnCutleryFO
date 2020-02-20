import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMachineComponent } from './update-machine.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';

describe('UpdateMachineComponent', () => {
  let component: UpdateMachineComponent;
  let fixture: ComponentFixture<UpdateMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [MachineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when MachineId is empty', () => {
    spyOn(window, 'alert');
    component.machineUpdate.machineId = '';
    component.updateMachineType();
    expect(window.alert).toHaveBeenCalledWith('Machine ID field is mandatory.');
  });

  it('should return true when MachineId is filled', () => {
    spyOn(window, 'alert');
    component.machineUpdate.machineId = '2';
    component.updateMachineType();
    expect(window.alert).toHaveBeenCalledWith('Machine type was successfully updated.');
  });

  it('should call updateMachineType Method when identification is filled', () => {
    const debugElement = fixture.debugElement;
    const machineService = debugElement.injector.get(MachineService);
    const spy = spyOn(machineService, 'updateMachineType').and.callThrough();
    component.machineUpdate.machineId = '2';
    component.updateMachineType();
    expect(spy).toHaveBeenCalled();
  });
});
