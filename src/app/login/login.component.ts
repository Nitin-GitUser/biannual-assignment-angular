import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  usersData = [
    {
      email: 'nagp@nagarro.com',
      password: 'nagp1234',
      admin: true
    },
    {
      email: 'nitin.goyal@nagarro.com',
      password: 'nagp2021',
      admin: false
    }
  ];
  user: Users;

  message: string;

  constructor(private readonly router: Router) {
    this.user = new Users();
    this.message = '';
  }

  verifyDetails(userForm: NgForm): void {
    const email = userForm.value.email;
    const password = userForm.value.password;

    const matchingUser: Users[] = this.usersData.filter(user =>
      user.email === email);

    if (matchingUser.length === 0) {
      this.message = 'This email is not registered';
    }
    else if (matchingUser[0].password === password) {
      localStorage.setItem('LoggedInUser', email);
      if (matchingUser[0].admin){
        localStorage.setItem('Admin', 'Yes');
      }
      else {
        localStorage.setItem('Admin', 'No')
      }
      
      this.router.navigateByUrl('/');
    }
    else {
      this.message = 'Enter a valid password';
    }

  }

}
