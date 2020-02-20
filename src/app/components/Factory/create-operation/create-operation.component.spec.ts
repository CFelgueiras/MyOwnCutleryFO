import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperationComponent } from './create-operation.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';
import {OperationService} from '../../../services/operation.service';

describe('CreateOperationComponent', () => {
  let component: CreateOperationComponent;
  let fixture: ComponentFixture<CreateOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [OperationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when Name is empty', () => {
    spyOn(window, 'alert');
    component.operation.Name = '';
    component.addOperation();
    expect(window.alert).toHaveBeenCalledWith('Operation name is mandatory.');
  });

  it('should return true when name is filled', () => {
    spyOn(window, 'alert');
    component.operation.Name = 'operation2';
    component.addOperation();
    expect(window.alert).toHaveBeenCalledWith('Operation successfully added.');
  });

  it('should call AddOperation Method when name is filled', () => {
    const debugElement = fixture.debugElement;
    const operationService = debugElement.injector.get(OperationService);
    const spy = spyOn(operationService, 'addOperation').and.callThrough();
    component.operation.Name = 'operation2';
    component.addOperation();
    expect(spy).toHaveBeenCalled();
  });
});
