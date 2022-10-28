
import { CommonModule } from '@angular/common';
import { ExamComponent } from './compenet/exam/exam.component';
import { MatrialModule } from '../matrial/matrial.module';
import { SharedModule } from 'src/shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA}  from '@angular/core';
import { SubjectComponent } from './compenet/subject/subject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamstudentDoctorComponent } from './compenet/examstudent-doctor/examstudent-doctor.component';
import { ListstudentsComponent } from './compenet/liststudents/liststudents.component';



@NgModule({
  declarations: [
    ExamComponent,
    SubjectComponent,
    ExamstudentDoctorComponent,
    ListstudentsComponent
  ],
  imports: [
    CommonModule,
    MatrialModule,
    SharedModule,
    BrowserAnimationsModule

  ],

  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DoctorModule { }
