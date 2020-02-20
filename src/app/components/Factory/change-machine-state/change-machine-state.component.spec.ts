import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMachineStateComponent } from './change-machine-state.component';
import {imports} from '../../../app.imports';
import {declarations} from '../../../app.declarations';

describe('ChangeMachineStateComponent', () => {
  let component: ChangeMachineStateComponent;
  let fixture: ComponentFixture<ChangeMachineStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports,
      declarations
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMachineStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
