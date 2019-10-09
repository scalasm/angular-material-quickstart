import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material PWA Quickstart';

  mobileQuery: MediaQueryList;

  nav = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'My Account (Part 2)',
      path: '/auth'
    }
  ];

  private mobileQueryListener: () => void;

  @Output()
  toggleSideNav = new EventEmitter();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      console.log('We are on mobile device!');
      nav.toggle();
    } else {
      console.log('We are on desktop device!');
    }
  }
}
