import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isError:boolean = false;

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  handleFormSubmit(a:NgForm){
    this.isError = !a.valid;
    console.log(a.valid);
  }

}
