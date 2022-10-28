import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
   users:any[]=[];
  type:string="students"

  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
    this.getuser();
  }

  createForm()
   {
    this.loginForm = this.fb.group
    ({
      type:[this.type],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
    })
   }

  getrole(event:any)
  {
   this.type= event.value;
    this.getuser();
  }


  getuser()
  {
    this.service.getstudent(this.type).subscribe((res:any)=>
    {
      this.users=res
    })
  }
  submitt()
  {
    let index= this.users.findIndex(item=>item.email == this.loginForm.value.email &&  item.password == this.loginForm.value.password)

    if(index ==-1)
    {
      this.toastr.error(" كلمه المرور او الأيميل ليسوا موجودين " ,"",{
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }
    else
    {
      const model =
      {
        username: this.users[index].username,
        Role: this.type,
        userid:this.users[index].id
      }
      this.service.getlogin(model).subscribe((res:any) => {
        this.service.user.next (res) ;
        this.toastr.success("تم تسجيل الدخول بنجاح","",{
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })

      })
      this.router.navigate(['/subject'])
    }
    }

  }

