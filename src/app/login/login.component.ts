import { UserInfo } from './../interfaces/user-info';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login({ email: 'demo@miniasp.com', password: '123456' })
    .subscribe((res: UserInfo) => {
      console.log('user', res.user);
      localStorage.setItem('JWTToken', res.user.token);
      this.router.navigate(['/']);
    });
  }

}
