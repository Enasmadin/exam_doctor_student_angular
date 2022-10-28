import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './services/shared/shared.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    materialModules,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    ToastrModule.forRoot(),



  ],
  exports:[
    HeaderComponent,
    materialModules,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserModule

  ]

})
export class SharedModule { }
