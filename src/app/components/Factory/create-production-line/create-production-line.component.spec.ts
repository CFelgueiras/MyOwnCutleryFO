import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductionLineComponent } from './create-production-line.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {MachineService} from '../../../services/machine.service';
import {ProductionLineService} from '../../../services/production-line.service';

describe('CreateProductionLineComponent', () => {
  let component: CreateProductionLineComponent;
  let fixture: ComponentFixture<CreateProductionLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [ProductionLineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when name is empty', () => {
    spyOn(window, 'alert');
    component.productionLine.Name = '';
    component.AddProductionLine();
    expect(window.alert).toHaveBeenCalledWith('Production line name is mandatory.');
  });

  it('should return true when name is filled', () => {
    spyOn(window, 'alert');
    component.productionLine.Name = 'prodline2';
    component.AddProductionLine();
    expect(window.alert).toHaveBeenCalledWith('Production line successfully added.');
  });

  it('should call addProductionLine Method when name is filled', () => {
    const debugElement = fixture.debugElement;
    const productionLine = debugElement.injector.get(ProductionLineService);
    const spy = spyOn(productionLine, 'addProductionLine').and.callThrough();
    component.productionLine.Name = 'prodline2';
    component.AddProductionLine();
    expect(spy).toHaveBeenCalled();
  });
});
