import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private formBuilder:FormBuilder){
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

  protected readonly name = name;
}
