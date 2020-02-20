import { TestBed } from '@angular/core/testing';

import { ManufacturingPlanService } from './manufacturing-plan.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('ManufacturingPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: ManufacturingPlanService = TestBed.get(ManufacturingPlanService);
    expect(service).toBeTruthy();
  });
});
