import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  loader: any = false;
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Do something when navigation starts
        console.log('Navigation started');
      }

      if (event instanceof NavigationEnd) {
        // Do something when navigation ends successfully
        console.log('Navigation ended successfully');
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
        }, 1500);
      }

      if (event instanceof NavigationCancel) {
        // Do something if navigation is canceled
        console.log('Navigation canceled');
      }

      if (event instanceof NavigationError) {
        // Do something if navigation ends with an error
        console.log('Navigation error occurred');
      }
    });
  }
}
