import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject()

  constructor(private http:HttpClient) {  }

  createuser(model:any)
  {
     return  this.http.post(environment.baseApi+ 'students', model)
  }
  getstudent(type:string)
  {
     return this.http.get(environment.baseApi+type)
  }
  getlogin(model:any)
  {
     return this.http.put(environment.baseApi+"login/1",model)
  }
  getrole()
  {
    return this.http.get(environment.baseApi+"login/1")
  }
  getinfostudent(id:number)
  {
     return this.http.get(environment.baseApi+"students/" + id)
  }
  updatesubjtect(id:number,model:any)
  {
    return this.http.put(environment.baseApi+"students/"+ id,model)
  }
}
