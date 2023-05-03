import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  apiUrl = 'https://localhost:7011/api/Mailing/SendMail';



  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, emailData);
  }


}
