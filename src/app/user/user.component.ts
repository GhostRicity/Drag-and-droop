import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidator } from '../userValidator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;
  username = "";

  constructor(private _router: Router, fb: FormBuilder) {
    this.form = fb.group({
      username:['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15), UserValidator.cannotContainSpace])]
    })
  }

  ngOnInit() {
  }

  submit(){
    this.username = this.form.value.username;
    this._router.navigate(['game/'+this.username]);
  }

}
