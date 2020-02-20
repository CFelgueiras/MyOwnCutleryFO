import { TestBed } from '@angular/core/testing';

import { OperationService } from './operation.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('OperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: OperationService = TestBed.get(OperationService);
    expect(service).toBeTruthy();
  });
});
