import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Apollo, gql } from "apollo-angular";
import { EmailInput } from "../graphql.types";
import { SAVE_EMAIL } from "../graphql.operations";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  loading = false;

  constructor(private formBuilder:FormBuilder, private apollo: Apollo){
    this.contactForm = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', Validators.required),
      }
    );
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      const {name, email, message} = this.contactForm.value;

      // Create new EmailInput object
      const emailInput: EmailInput = {
        senderName: name,
        senderEmail: email,
        message: message,
      }

      this.apollo.mutate({
        mutation: SAVE_EMAIL,
        variables: {
          email: emailInput,
        }
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
        (error) => {
          console.log('there was an error sending the query', error);
        }
      )
    }
    else {
      console.log("Form is invalid");
    }
  }

}
