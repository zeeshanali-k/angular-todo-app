import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = true;
  router: Router
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  handleLogin(loginDetails: NgForm) {
    this.isValid = loginDetails.valid!;
    if (loginDetails.valid) {
      this.router.navigateByUrl("/dashboard");
    }
  }

}
