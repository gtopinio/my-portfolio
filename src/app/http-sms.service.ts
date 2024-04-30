import { Injectable } from '@angular/core';
import HttpSms from 'httpsms';

@Injectable({
  providedIn: 'root'
})
export class HttpSmsService {

  constructor(
    private httpSms: HttpSms
  ) { }

}
