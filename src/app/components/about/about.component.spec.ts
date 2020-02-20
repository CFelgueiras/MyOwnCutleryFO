import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { declarations } from '../../app.declarations';
import { AboutComponent } from './about.component';
import {importType} from '@angular/compiler/src/output/output_ast';
import {imports} from '../../app.imports';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
