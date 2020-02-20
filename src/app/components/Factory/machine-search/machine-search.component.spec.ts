import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineSearchComponent } from './machine-search.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';

describe('MachineSearchComponent', () => {
  let component: MachineSearchComponent;
  let fixture: ComponentFixture<MachineSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
