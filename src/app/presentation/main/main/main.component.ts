import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "Tasks Zone" 

  constructor(route:Router) {
    route.navigateByUrl("/(main:home)");
  }

  ngOnInit(): void {
  }

}
