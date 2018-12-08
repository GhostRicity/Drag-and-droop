import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
})
export class CartoonComponent implements OnInit {

  numCartoon = 1;
  imgSrc = "../assets/img/cartoon-"+this.numCartoon+".jpg";

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  nextCartoon() {
    if (this.numCartoon < 3) {
      this.numCartoon++;
      this.imgSrc = "../assets/img/cartoon-"+this.numCartoon+".jpg";
    } else {
      this.getUserPage();
    }
    
  }

  getUserPage(){
    this._router.navigate(['user']);
  }

}
