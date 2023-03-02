import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() title: string | undefined;

  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      subject_matter: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
      contact: new FormGroup({
        name: new FormControl('', [Validators.required]),
        tel: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
    });
  }

  onSubmit(contactFormData: any) {
    this.contactService.sendEmail(contactFormData).subscribe(
      (response) => {
        console.log(response);
        alert('Obrigado pela mensagem. Responderei em breve!');
      },
      (error) => {
        console.log({ error });
        alert('Oops, algo deu errado... Tente mais tarde!');
      }
    );
  }
}
