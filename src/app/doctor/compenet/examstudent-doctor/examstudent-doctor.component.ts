import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-examstudent-doctor',
  templateUrl: './examstudent-doctor.component.html',
  styleUrls: ['./examstudent-doctor.component.css']
})
export class ExamstudentDoctorComponent implements OnInit {
   id:any;
   subject!:any;
   user:any;
   total:number=0;
   studentinfo:any
   subjectinfo:any[]=[]
   showresult:boolean=false;
   notrepeatexam:boolean=true;
  constructor(private route:ActivatedRoute,private service:DoctorService , private toster:ToastrService , private authservice:AuthService) {
    this.id= this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getsubjectdetail()
    this. getlogedinfo()


  }
  getsubjectdetail()
  {
    this.service.getdetailsubjectbyid(this.id).subscribe((res:any)=>{
      this.subject=res
       console.log(this.subject)
    })
  }
   // to delte one object from array //
  delte(index:any)
  {
    this.subject.question.splice(index,1)
    const model =
    {
      name:this.subject.name,
      question:this.subject.question,

    }
    this.service.updatequestion(model,this.id).subscribe((res:any)=>
    {
       this.toster.success("تم حذف العنصر بنجاح")
    })
    //  to delte  in my database //
  }
  getlogedinfo()
  {
    this.authservice.getrole().subscribe((res:any) =>{
      this.user=res;
      this.getuserinfo()
    })
  }


    getuserinfo()
    {
      this.authservice.getinfostudent(this.user.userid).subscribe((res:any)=>{
        this.studentinfo = res;
        console.log(this.studentinfo)
        this.subjectinfo= res?.subject? res?.subject : []  // to reach the subject  as array
        // console.log(this.subjectinfo)
        this.getcheck();

      })
    }
    getcheck()
    {
      for(let x in this.subjectinfo)
      {
         if(this.subjectinfo[x].id == this.id)
         {
           this.notrepeatexam=false;
           this.toster.warning("لقد تم اجتياز هذا اللأختبار مسبقا")
         }
      }

    }

  getcanswer(event:any)
  {
    let value = event.value
    let  questionindex = event.source.name;
    this.subject.question[questionindex].studentanswer=value // bind this (answer) in (question)
  }
  getResult() {

    this.total = 0
    for(let x in this.subject.question) {

      if(this.subject.question[x].studentanswer == this.subject.question[x].corectanswer) {
        this.total++;

      }
    }
    this.showresult=true;
    this.subjectinfo.push({
      name:this.subject.name,
      id:this.id,
      degree:this.total
    })
    const model ={
      username:  this.studentinfo.name,
      email:   this.studentinfo.email,
      password:  this.studentinfo.password,
      subject:this.subjectinfo,
      id: this.studentinfo.id
    }
    this.authservice.updatesubjtect( this.user.userid,model).subscribe((res:any) =>{
       this.toster.success("تم تسجيل النتيجه")
    })

  }}

