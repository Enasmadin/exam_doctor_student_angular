import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {

  userForm!:FormGroup;
  students:any[]=[];
  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.createForm();
    this.getstudents();
  }

  createForm()
  {
    this.userForm = this.fb.group({
      username:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      confirmPassword:['' , [Validators.required]],
    })
}
  getstudents()
  {
    this.service.getstudent('students').subscribe((res:any)=>{
      this.students=res
    })
  }

submit() {
  const model = {
    username:this.userForm.value.username,
    email:this.userForm.value.email,
    password:this.userForm.value.password,
  }
  let index= this.students.findIndex(item=>item.email == this.userForm.value.email)

  if(index !==-1)
  {
    this.toastr.error(" هذا الأيميل موجود فعلا" ,"",{
      disableTimeOut: false,
      titleClass: "toastr_title",
      messageClass: "toastr_message",
      timeOut:5000,
      closeButton: true,
    })
  }
  else
  {
    this.service.createuser(model).subscribe((res:any) => {
      this.toastr.success("تم انشاء الحساب بنجاح","",{
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
      const model =
      {
        username: res.username,
        Role: 'students',
        userid:res.id
      }
      this.service.getlogin(model).subscribe((res:any) => {
        this.service.user.next (res) ;


    })
    this.router.navigate(['/subject'])

  })
}}}

