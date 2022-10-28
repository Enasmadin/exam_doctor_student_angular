import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DoctorService } from '../../services/doctor.service';
import { visibility ,flyInOut,expand,openClose} from '../../animation';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  animations: [
    // visibility(),
    // flyInOut(),
    // expand(),
    openClose()
    // trigger('openClose', [

    //   state('open', style({

    //     transform: 'translatex(0)',
    //   })),
    //   state('closed', style({
    //     transform: 'translatey(10%)',
    //   })),
    //   transition('* => *', [
    //     animate('0.5s')
    //   ]),

    // ]),

  ]
})
export class SubjectComponent implements OnInit {
   sypject:any[]=[];
   user:any=null ;
   isOpen :boolean= true;
  constructor( private subjectservice:DoctorService , private authservice:AuthService, private toster:ToastrService) { }

  ngOnInit(): void {
    this.getsypject();
    this.getrole();
  }
   getsypject()
   {
    this.subjectservice.getsubject().subscribe((res:any)=>
    {
       this.sypject = res
    })

   }
   getrole()
   {
    this.authservice.getrole().subscribe((res:any) =>
    {
       this.user=res
       console.log(this.user)
    }
    )
  }
  delete(index:number)
  {
    let id = this.sypject[index].id
    this. sypject.splice(index,1)
    this.subjectservice.deltesubject(id).subscribe((res:any)=>
    {
       this.toster.success("تم الحذف بنجاح")
    })

  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
