import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {imports} from '../app.imports';
import {declarations} from '../app.declarations';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports,
    declarations
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
