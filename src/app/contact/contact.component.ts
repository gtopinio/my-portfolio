import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from "apollo-angular";
import { EmailInput } from "../graphql.types";
import { SAVE_EMAIL } from "../graphql.operations";
import { ConfirmationService, MessageService } from "primeng/api";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { EmailService } from "../email.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  loading = false;
  MessageMinLength = 5;

  constructor(private formBuilder:FormBuilder,
              private apollo: Apollo,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private http: HttpClient,
              private _emailService: EmailService

  ){
    this.contactForm = this.formBuilder.group(
      {
        first_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', Validators.required),
      }
    );
  }

  ngOnInit(): void {
  }

  async onConfirm(){
    if(!this.contactForm.valid){
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning: Form is invalid',
        detail: 'Please fill out the form'
      });
    } else {
      this.confirmationService.confirm({
        header: 'Message Confirmation',
        icon: 'pi pi-exclamation-triangle',
        message: 'Are you sure that you want to send this message?',
        accept: async () => {
          await this.acceptSendMessage()
        },
        reject: () => {
          this.rejectSendMessage()
        }
      });
    }
  }

  rejectSendMessage(){
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Message not sent'});
  }

  async acceptSendMessage() {
    this.loading = true;
    try {
      const isSent = await this.onSubmit();
      if (isSent) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success: Message sent successfully',
          detail: 'Please wait for a response'
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error: Message not sent',
          detail: 'An error occurred while sending the message'
        });
      }
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error: Message not sent',
        detail: 'An error occurred while sending the message'
      });
    } finally {
      this.loading = false;
    }
  }

  async onSubmit(): Promise<boolean> {
    if (this.contactForm.valid) {
      const { first_name, last_name, email, message } = this.contactForm.value;
      // SEND-SMS No longer supported
      // return await this.sendSms(name, email, message);
      return await this.sendEmail(first_name, last_name, email, message);
    }
    return false;
  }

  async sendEmail(first_name: string, last_name : string, email: string, message: string) : Promise<boolean> {
    // OLD IMPLEMENTATION
    // const emailInput: EmailInput = {
    //   senderName: name,
    //   senderEmail: email,
    //   message: message,
    // };
    //
    // try {
    //   await this.apollo.mutate({
    //     mutation: SAVE_EMAIL,
    //     variables: {
    //       email: emailInput,
    //     },
    //   }).toPromise();
    //   this.loading = false;
    //   this.contactForm.reset();
    //   return true;
    // } catch (error) {
    //   this.loading = false;
    //   throw error;
    // }

    const emailDTO = this._emailService.buildEmailDTO(email, 'My Portfolio Notification', message, first_name, last_name);
    return new Promise((resolve) => {
      this._emailService.sendEmail(emailDTO).subscribe({
        next: (response: any) => {
          console.log("Response: ", response);
          this.contactForm.reset();
          resolve(true);
        },
        error: (error) => {
          console.error("Error sending email: ", error);
          resolve(false);
        }
      });
    });

  }

  async sendSms(name: string, email: string, message: string) : Promise<boolean> {
    message = '' +
      'My Portfolio Notification: \n\n' +
      'Name: ' + name + '\nEmail: ' + email + '\nMessage: '
      + message + '\n\nThis is an automated message. Do not reply.';

    try {
      const response = await this.http.post('https://api.httpsms.com/v1/messages/send', {
        "content": message,
        "from": environment.MY_PHONE_NUMBER,
        "to": environment.MY_PHONE_NUMBER,
      }, {
        headers: {
          'x-api-key': environment.HTTP_SMS_KEY,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).toPromise();

      console.log("Response: ", response);
      return true;
    } catch (error) {
      throw error;
    }
  }

}
