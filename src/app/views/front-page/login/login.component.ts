import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  swalHtml: any;

  @ViewChild('createSwal') private createSwal: SwalComponent;
  constructor() { }

  ngOnInit() {
  }

/*  openSwal(){
    this.setSwalHtml();
    this.createSwal.html = this.swalHtml;
    this.createSwal.show();
  }

  setSwalHtml() {
    this.swalHtml = `<div><h1>Hello</h1></div>`;
  }*/
}
