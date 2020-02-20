import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingPlanSearchComponent } from './manufacturing-plan-search.component';
import {imports} from '../../../app.imports';
import {declarations} from '../../../app.declarations';

describe('ManufacturingPlanSearchComponent', () => {
  let component: ManufacturingPlanSearchComponent;
  let fixture: ComponentFixture<ManufacturingPlanSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingPlanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
