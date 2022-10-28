import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//  import { MaterialModule } from 'src/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AuthModule,
   



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
