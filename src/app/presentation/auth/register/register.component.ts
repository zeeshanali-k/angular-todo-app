import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isValid = true;

  constructor() { }

  ngOnInit(): void {
  }
  handleRegister(form: NgForm) {
    this.isValid = form.valid!;
    console.log(form.value);
    console.log(form.valid);
  }

}
