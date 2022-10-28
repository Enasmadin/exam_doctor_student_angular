import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrls: ['./liststudents.component.css']
})
export class ListstudentsComponent  implements  OnInit{
  dataSource:any
  displayedColumns:any;
  datatable:any;
  constructor( private service:AuthService) {
    this.displayedColumns = ['position', 'name', 'subjectname', 'degree'];
  }

  ngOnInit(): void {
    this.getstudent();

  }

  getstudent()
  {
    this.service.getstudent('students').subscribe((res:any)=>{

      this.dataSource = res?.map((student:any)=>{
        if( student?.subject)
       {


        return student?.subject?.map((substud:any)=>{
          return{
            name:student.username,
            subjectname:substud.name,
            degree:substud.degree
          }
        })}
        else{
          return [{
            name:student.username,
            subjectname:"_",
            degree:"_"

          }]

        }
      })
      // console.log(this.dataSource)

      this.datatable=[];
      this.dataSource.forEach((student:any) => {
       student.forEach((subitem:any)=>{
        this.datatable.push({
          name:subitem.name,
          subjectname:subitem.subjectname,
          degree:subitem.degree
        })
       })

      });
    })

  }
}







