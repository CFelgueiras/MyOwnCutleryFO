import {TestBed} from '@angular/core/testing';
import {ClientService} from './client.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('ClientService', () => {
  // tslint:disable-next-line:no-unused-expression

  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });
});
