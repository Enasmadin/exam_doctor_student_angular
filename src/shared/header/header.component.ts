import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any=null ;
  constructor(private service:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.service.user.subscribe((res:any)=>{
      if(res.Role){

        this.user=res;
      }

    })

  }
  logout()
  {
     const model ={}
     this.service.getlogin(model).subscribe((res:any)=>
     {
            this.user=null;
            this.service.user.next(res)
            this.router.navigate(['/login'])

     }
    )




  }


}
