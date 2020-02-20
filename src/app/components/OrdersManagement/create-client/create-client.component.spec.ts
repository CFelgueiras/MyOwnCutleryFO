import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import { CreateClientComponent } from './create-client.component';
import {ClientService} from '../../../services/client.service';

describe('CreateClientComponent', () => {
  let component: CreateClientComponent;
  let fixture: ComponentFixture<CreateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers: [ClientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
