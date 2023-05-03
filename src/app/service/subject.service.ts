import { Subject } from './../models/createMsg';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient:HttpClient) { }

  url = "https://localhost:7011/api/";


  GetSubjects():Observable<Subject[]>
  {
    return this.httpClient.get<Subject[]>(this.url + 'Messages');
  }

  CreateSubject(sub : any):Observable<Subject>
  {
    return this.httpClient.post<Subject>(this.url + 'Messages/message' , sub)
  }


  GetById(id: any):Observable<Subject[]>
  {
    return this.httpClient.get<Subject[]>(this.url + `Messages/${id}`);
  }

}





