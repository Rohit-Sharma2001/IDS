import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  totalAngularPackages: any;
  url:any="https://ids-ten.vercel.app/"
  constructor(private http: HttpClient) { }


saveQuery(form:any){
return this.http.post(this.url+"query/saveQuery",form)
}

}
