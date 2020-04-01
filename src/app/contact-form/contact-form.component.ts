import { Component, OnInit } from '@angular/core';
// Import model class
// import { ContactForm } from '../modelClasses/contact-form';
// Template-driven form
import { NgForm } from '@angular/forms';
// import { FormBuilder } from '@angular/forms'; // FormBuilder is a service

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

//  email: string = null;
//  name: string = null;
//  contactForm = new ContactForm(this.email, this.name);
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  sendMessage(myform: NgForm):void {
    console.log("In sendMessage method")
    console.log(myform);
    // TODO: send email -> if successful resetForm() and show message that was successful, else do not reset and show error 
    this.submitted = true;
    // myform.resetForm();
  }
}
