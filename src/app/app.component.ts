import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoading = true;

  constructor(private router: Router) {
    if (localStorage.getItem("isLoggedIn") && localStorage.getItem("isLoggedIn") == "1") {
      router.navigateByUrl("/dashboard");
    }
    router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        this.isLoading = false;
      } else if (val instanceof NavigationStart) {
        this.isLoading = true;
      }
    });
  }

  title: string = 'Tasks Zone';
}
