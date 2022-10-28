import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from '../matrial/matrial.module';
import { LoginComponent } from './components/login/login.component';

import { SiginupComponent } from './components/siginup/siginup.component';








@NgModule({
  declarations: [
    LoginComponent,


     SiginupComponent,
  ],

  imports: [
     CommonModule,
      FormsModule,
      BrowserModule,
      ReactiveFormsModule,
      SharedModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,

      MatrialModule






  ],
  exports: [
    CommonModule,

    ReactiveFormsModule,
    FormsModule,
    SharedModule,

    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule



]
})
export class AuthModule { }
