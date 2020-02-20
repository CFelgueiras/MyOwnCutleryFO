import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchComponent } from './search-client.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';

describe('MachineSearchComponent', () => {
  let component: ClientSearchComponent;
  let fixture: ComponentFixture<ClientSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
