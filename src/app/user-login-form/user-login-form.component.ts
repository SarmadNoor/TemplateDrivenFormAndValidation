import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  roles = ['Admin', 'Developer', 'QA'];
  model = new UserLogin(); 
  validated:string = "Validation successful";
  onSubmit() {
    this.validated = "Button Clicked";
    console.log(this.validated);
  }

}
