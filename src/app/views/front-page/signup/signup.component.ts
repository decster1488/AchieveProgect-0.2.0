import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from '../../../shared/services/user-service.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public userName = '';
  public userMail = '';
  public password = '';
  public passwordRepit = '';
  swalHtml: any;

  @ViewChild('signusSwal') private createSwal: SwalComponent;


  constructor(private userserv: UserServiceService) { }

  ngOnInit() {
  }


  openHtml() {
    this.setSwalHtml()
    this.createSwal.html = this.swalHtml;
    this.createSwal.show();
  }

  userSignup() {
  // const req = { username: this.userName, email: this.userMail, password: this.password };
  // console.log(req);
  // this.userserv.registerUser(req).subscribe(res => {});
    console.log('KY');
  }

  setSwalHtml() {

    this.swalHtml =
      `
        <div>
          <p>Enter your Name:</p>
          <input type="text" placeholder="Name" [(ngModel)]="userName" autofocus>
          <p>Entre your E-mail:</p>
          <input type="text" placeholder="E-mail" [(ngModel)]="userMail">
          <p>Enter password:</p>
          <input type="password" placeholder="Password" [(ngModel)]="password">
          <p>Repeat password:</p>
          <input type="password" placeholder="Repeat password" [(ngModel)]="passwordRepit">
          <p>If everything ok press Sign up</p>
        </div>
      `
  }




}
