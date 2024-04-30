import { Component, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from "apollo-angular";
import { EmailInput } from "../graphql.types";
import { SAVE_EMAIL } from "../graphql.operations";
import { ConfirmationService, MessageService } from "primeng/api";
import { environment } from "../../environments/environment.development";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  loading = false;
  MessageMinLength = 20;

  constructor(private formBuilder:FormBuilder,
              private apollo: Apollo,
              private confirmationService: ConfirmationService,
              private messageService: MessageService

  ){
    this.contactForm = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', Validators.required),
      }
    );
  }

  ngOnInit(): void {
    if(isDevMode()){
      console.log('Development mode');
      console.log(environment.HTTPS_SMS_KEY);
    } else {
      console.log('Production mode');
      console.log(environment.HTTPS_SMS_KEY);
    }
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

async acceptSendMessage() {
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
      detail: 'Either the form is invalid or the message is too short'
    });
  }
}

  rejectSendMessage(){
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Message not sent'});
  }


  async onSubmit(): Promise<boolean> {
    let isSent = false;

    if (this.contactForm.valid) {
      this.loading = true;
      const { name, email, message } = this.contactForm.value;

      if (name === null || email === null || message === null) {
        console.log('Form is invalid');
        this.loading = false;
        return isSent;
      }

      // If the message has characters but only whitespace, then it is invalid
      if (message.trim().length === 0) {
        console.log('Message is only whitespace');
        this.loading = false;
        return isSent;
      }

      if (message.length < this.MessageMinLength) {
        console.log('Message is too short');
        this.loading = false;
        return isSent;
      }

      // isSent = await this.sendEmail(name, email, message);
    } else {
      console.log('Form is invalid');
      this.loading = false;
    }

    return isSent;
  }

  async sendEmail(name: string, email: string, message: string) : Promise<boolean> {
    // Create new EmailInput object
    const emailInput: EmailInput = {
      senderName: name,
      senderEmail: email,
      message: message,
    };

    try {
      await this.apollo
        .mutate({
          mutation: SAVE_EMAIL,
          variables: {
            email: emailInput,
          },
        })
        .toPromise();
      console.log('Successfully sent the message');
      this.loading = false;
      this.contactForm.reset();
      return true;
    } catch (error) {
      console.log('Error sending the email: ', error);
      this.loading = false;
      return false;
    }
  }

}
