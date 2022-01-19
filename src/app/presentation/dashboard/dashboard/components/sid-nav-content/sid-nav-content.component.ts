import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sid-nav-content',
  templateUrl: './sid-nav-content.component.html',
  styleUrls: ['./sid-nav-content.component.css']
})
export class SidNavContentComponent implements OnInit {

  private router: Router;
  name = "Zeeshan Ali";

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }
  handleLogout() {
    localStorage.setItem("isLoggedIn", "0");
    this.router.navigateByUrl("/");
  }
  handleDragEnter() {
    console.log("Entered");
  }
}
