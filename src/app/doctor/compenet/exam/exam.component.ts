import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor( private _formBuilder: FormBuilder, private toastr: ToastrService ,private service:DoctorService) { }

  name = new FormControl("");
  question:any[]=[];
  questionform !:FormGroup;
  corectetednumber:any;
  startadd:boolean= false;
  subjectName !: string | null;
  steeper:number=0
  preview:boolean=false;
  id!:number
  ngOnInit(): void {
    this.createfromgroup()
  }
  createfromgroup()
  {
    this.questionform = this._formBuilder.group({
      question:['',[Validators.required]],
      Answer1:['',[Validators.required]],
      Answer2:['',[Validators.required]],
      Answer3:['',[Validators.required]],
      Answer4:['',[Validators.required]],
    })
  }

  createquestion()
  {
    if(this.corectetednumber)
    {
       const model ={
         question:this.questionform.value.question,
         Answer1:this.questionform.value.Answer1,
         Answer2:this.questionform.value.Answer2,
         Answer3:this.questionform.value.Answer3,
         Answer4:this.questionform.value.Answer4,
         corectanswer:this.questionform.value[this.corectetednumber],
       }
       this.question.push(model);
       this.questionform.reset()
      }
       else
       {
          this.toastr.error("يرجي اختيار الأجابه الصحيحه")
       }

     console.log(this.question)
  }

  submitt()
  {
   const model =
   {
     name:this.subjectName,
     question:this.question

   }


   if(this.preview)
   {
    this.steeper=2
   }
   else
   {
    this.service.createuser(model).subscribe((res:any) =>{
      this.preview=true
       this.id = res.id

     })
   }
  }

  getcorrect(event:any)
  {
    this.corectetednumber=event.value;

  }
  start()
  {
    if(this.name.value== "")
    {
       this.toastr.error("يرجي ادخال اسم الماده")
    }
   else
   {
     this.startadd=true;
     this.subjectName = this.name.value
   }

   if(this.startadd)
   {
    this.steeper=1
    console.log(this.steeper)
   }



   }
   delte()
   {
    this.questionform.reset()
   }
   cansel()
   {
    this.questionform.reset();
     this.question=[]
     this.subjectName="";
     this.name.reset();
     this.steeper=0
     this.startadd=false
   }

   deleteone(index:any)
   {
     this.question.splice(index,1)
     const model =
     {
      name:this.subjectName,
      question:this.question
     }
     this.service.updatequestion(model,this.id).subscribe((res:any)=>
     {
        this.toastr.success("تم حذف العنصر بنجاح")
     })

   }

  }




