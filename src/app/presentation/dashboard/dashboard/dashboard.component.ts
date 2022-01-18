import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav, MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

  isDestroyed = new Subject<void>();
  hideSideNav: Boolean = false;
  opened = true;
  constructor(breakPointObserver: BreakpointObserver, router: Router) {

    router.navigateByUrl("/dashboard/(dashboard:add_task)");

    breakPointObserver.observe(
      [
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]
    ).pipe(takeUntil(this.isDestroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            console.log(query);
            // console.log(query == Breakpoints.Large);
            this.hideSideNav = (query == Breakpoints.Medium)
              || (query == Breakpoints.Small)
              || (query == Breakpoints.XSmall);
            this.opened = !this.hideSideNav;
          }
        }
      }
      );

  }
  ngOnDestroy(): void {
    this.isDestroyed.next();
    this.isDestroyed.complete();
  }

  handleClick(sn: MatSidenav) {
    console.log(this.opened);
    sn.toggle();
  }

}
