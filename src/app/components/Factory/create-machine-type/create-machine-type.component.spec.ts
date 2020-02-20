import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineTypeComponent } from './create-machine-type.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';

describe('CreateMachineTypeComponent', () => {
  let component: CreateMachineTypeComponent;
  let fixture: ComponentFixture<CreateMachineTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [MachineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when Name is empty', () => {
    spyOn(window, 'alert');
    component.machineType.Name = '';
    component.addMachineType();
    expect(window.alert).toHaveBeenCalledWith('Machine type name is mandatory.');
  });

  it('should return true when Name is filled', () => {
    spyOn(window, 'alert');
    component.machineType.Name = 'machinetype2';
    component.addMachineType();
    expect(window.alert).toHaveBeenCalledWith('Machine type successfully added.');
  });

  it('should call addMachineType Method when Name is filled', () => {
    const debugElement = fixture.debugElement;
    const machineService = debugElement.injector.get(MachineService);
    const spy = spyOn(machineService, 'addMachineType').and.callThrough();
    component.machineType.Name = 'machine2';
    component.addMachineType();
    expect(spy).toHaveBeenCalled();
  });
});
