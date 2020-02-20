import {TestBed} from '@angular/core/testing';
import {MachineService} from './machine.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('MachineService', () => {
  // tslint:disable-next-line:no-unused-expression

  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: MachineService = TestBed.get(MachineService);
    expect(service).toBeTruthy();
  });
});
