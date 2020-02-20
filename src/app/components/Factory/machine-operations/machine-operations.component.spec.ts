import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineOperationsComponent } from './machine-operations.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';

describe('MachineOperationsComponent', () => {
  let component: MachineOperationsComponent;
  let fixture: ComponentFixture<MachineOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [MachineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
