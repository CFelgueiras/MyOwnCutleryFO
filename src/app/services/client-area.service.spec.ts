import { TestBed } from '@angular/core/testing';

import { ClientAreaService } from './client-area.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('ClientAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: ClientAreaService = TestBed.get(ClientAreaService);
    expect(service).toBeTruthy();
  });
});
