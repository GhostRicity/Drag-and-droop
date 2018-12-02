import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  getIntroPage(){
    this._router.navigate(['']);
  }


}
