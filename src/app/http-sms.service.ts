import { Injectable } from '@angular/core';
import { environment } from "../environments/environment.development";
import HttpSms from 'httpsms';

@Injectable({
  providedIn: 'root'
})
export class HttpSmsService {

  _client: HttpSms;
  myPhoneNumber = environment.MY_PHONE_NUMBER;

  constructor() {
    this._client = new HttpSms(environment.HTTPS_SMS_KEY);
  }

  async sendSms(name: string, email: string, message: string) : Promise<boolean> {
    let isSent = false;
    message = '' +
      'My Portfolio Notification: \n\n' +
      'Name: ' + name + '\nEmail: ' + email + '\nMessage: '
      + message + '\n\nThis is an automated message. Do not reply.';

    await this._client.messages.postSend({
      content: message,
      from: this.myPhoneNumber,
      to: this.myPhoneNumber,
      encrypted: false
    })
    .then(() => {
      console.log('Successfully sent the SMS');
      isSent = true;
    })
    .catch((error) => {
      console.error('Failed to send the SMS');
      console.error(error);
      isSent = false;
    });

    return isSent;
  }

}
