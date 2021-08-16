import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'node-biannual-assignment';

  constructor(private router: Router) {

  }
  get email() {
    return localStorage.getItem('LoggedInUser');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  } 
}
