import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName;
  public userPass;
  swalHtml: any;

  @ViewChild('loginSwal') private createSwal: SwalComponent;
  constructor() { }

  ngOnInit() {
  }

  openSwal(){
    this.setSwalHtml();
    this.createSwal.html = this.swalHtml;
    this.createSwal.show();
  }

  setSwalHtml() {
    this.swalHtml = `
      <div>
        <p>Enter Your Name:</p>
        <input type="text" [(ngModel)]="userName">
        <p>Enter Password:</p> 
        <input type="password" [(ngModel)]="userPass">
      </div>
      
      `;
  }
}
