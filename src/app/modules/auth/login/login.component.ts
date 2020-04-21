import {Component, OnDestroy, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

}
