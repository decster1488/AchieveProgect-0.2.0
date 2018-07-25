import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../../shared/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public userName = '';
  public userMail = '';
  public password = '';

  constructor(private userserv: UserServiceService) { }

  ngOnInit() {
  }

  okayPress() {
  const req = { username: this.userName, email: this.userMail, password: this.password };
  console.log(req);
  this.userserv.registerUser(req).subscribe(res => {});
  }

}
