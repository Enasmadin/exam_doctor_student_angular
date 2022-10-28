import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/shared/header/header.component';
import { LoginComponent } from './auth/components/login/login.component';

import { SiginupComponent } from './auth/components/siginup/siginup.component';
import { ExamComponent } from './doctor/compenet/exam/exam.component';
import { ExamstudentDoctorComponent } from './doctor/compenet/examstudent-doctor/examstudent-doctor.component';
import { ListstudentsComponent } from './doctor/compenet/liststudents/liststudents.component';
import { SubjectComponent } from './doctor/compenet/subject/subject.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:SiginupComponent},
  {path:"exam",component:ExamComponent},
  {path:"subject",component:SubjectComponent },
  {path:"exam/:id" ,component:ExamstudentDoctorComponent},
  {path:"list" ,component:ListstudentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
