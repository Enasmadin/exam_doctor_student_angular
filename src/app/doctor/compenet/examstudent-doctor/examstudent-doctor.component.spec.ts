import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamstudentDoctorComponent } from './examstudent-doctor.component';

describe('ExamstudentDoctorComponent', () => {
  let component: ExamstudentDoctorComponent;
  let fixture: ComponentFixture<ExamstudentDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamstudentDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamstudentDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
