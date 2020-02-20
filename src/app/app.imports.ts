import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule,
  MatMenuModule,
  MatCardModule,
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
// import { LoggerTestingModule } from 'ngx-logger/testing';
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
// import { GridsterModule } from 'angular-gridster2';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {HttpClientModule} from '@angular/common/http';

export const imports = [
  ReactiveFormsModule,
  HttpClientTestingModule,
  BrowserModule,
  AppRoutingModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  BrowserAnimationsModule,
  MatTableModule,
  FormsModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSelectModule,
  MatGridListModule,
  MatNativeDateModule,
  MatInputModule,
  // LoggerTestingModule,
  RouterTestingModule,
  MatDialogModule,
  // GridsterModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  FormsModule,
  HttpClientModule,
  MatCardModule,
  MatExpansionModule,
];
