import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTypeComponent } from './machine-type.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';

describe('MachineTypeComponent', () => {
  let component: MachineTypeComponent;
  let fixture: ComponentFixture<MachineTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
