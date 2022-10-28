import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  createuser(model:any)
  {
     return  this.http.post(environment.baseApi+ 'subject', model)
  }
  updatequestion(model:any,id:number)
  {
    return this.http.put(environment.baseApi+'subject/'+id, model);
  }
 getsubject()
 {
   return this.http.get(environment.baseApi+'subject');
 }
 deltesubject( id:number)
 {
   return this.http.delete(environment.baseApi+'subject/' + id)
 }
 getdetailsubjectbyid(id:number)
 {
  return this.http.get(environment.baseApi+'subject/' + id)
 }

}
