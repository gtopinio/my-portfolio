import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface EmailDTO {
  senderEmail: string;
  subject: string;
  message: string;
  senderFirstName: string;
  senderLastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://stompaas-c2.onrender.com/api';
  private sendEmailPath = '/send-email';

  constructor(
    private _httpClient: HttpClient
  ) { }

  buildEmailDTO(
    senderEmail: string,
    subject: string,
    message: string,
    senderFirstName: string,
    senderLastName: string
  ): EmailDTO {
    return {
      senderEmail,
      subject,
      message,
      senderFirstName,
      senderLastName
    };
  }

  sendEmail(emailDTO: EmailDTO): Observable<any> {
    return this._httpClient.post(`${this.apiUrl}${this.sendEmailPath}`, emailDTO, {responseType: 'text'}); // responseType: 'text' is required for the response to be parsed as text since the response is not a JSON object
  }
}
