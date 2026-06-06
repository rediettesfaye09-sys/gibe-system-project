
import { Component } from '@angular/core';
import { NavigationEnd ,Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  pageTitle = 'Dashboard';
  constructor(private router: Router){}

    ngOnInit(){
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url =this.router.url;
        if (url.includes('dashboard')) {
          this.pageTitle = 'Dashboard';
        } else if (url.includes('self-service')) {
          this.pageTitle = 'Self Service';
        } else if (url.includes('mfa-management')) {
          this.pageTitle = 'MFA Management';
        } else if (url.includes('token-claims')) {
          this.pageTitle = 'Token Claims';
        }
      })
    }
  }

