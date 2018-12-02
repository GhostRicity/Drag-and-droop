import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
})
export class CartoonComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  getUserPage(){
    this._router.navigate(['user']);
  }

}
