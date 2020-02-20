import { TestBed } from '@angular/core/testing';

import { ProductionLineService } from './production-line.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('ProductionLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: ProductionLineService = TestBed.get(ProductionLineService);
    expect(service).toBeTruthy();
  });
});
