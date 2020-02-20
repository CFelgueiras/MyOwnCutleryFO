import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateMachineComponent} from './create-machine.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';

describe('CreateMachineComponent', () => {
  let component: CreateMachineComponent;
  let fixture: ComponentFixture<CreateMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [MachineService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when identification is empty', () => {
    spyOn(window, 'alert');
    component.machine.Identification = '';
    component.AddMachine();
    expect(window.alert).toHaveBeenCalledWith('Machine identification is mandatory.');
  });

  it('should return true when identification is filled', () => {
    spyOn(window, 'alert');
    component.machine.Identification = 'machine2';
    component.AddMachine();
    expect(window.alert).toHaveBeenCalledWith('Machine successfully added.');
  });

  it('should call AddMachine Method when identification is filled', () => {
    const debugElement = fixture.debugElement;
    const machineService = debugElement.injector.get(MachineService);
    const spy = spyOn(machineService, 'addMachine').and.callThrough();
    component.machine.Identification = 'machine2';
    component.AddMachine();
    expect(spy).toHaveBeenCalled();
  });


});
