import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstudentsComponent } from './liststudents.component';

describe('ListstudentsComponent', () => {
  let component: ListstudentsComponent;
  let fixture: ComponentFixture<ListstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
