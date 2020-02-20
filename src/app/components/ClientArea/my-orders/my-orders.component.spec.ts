import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersComponent } from './my-orders.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {OperationService} from '../../../services/operation.service';

describe('MyOrdersComponent', () => {
  let component: MyOrdersComponent;
  let fixture: ComponentFixture<MyOrdersComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations,
        imports,
        providers: [ MyOrdersComponent ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
