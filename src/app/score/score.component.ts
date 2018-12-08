import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  username;
  score;
  users: any;

  constructor(private _router: Router, private _route:ActivatedRoute, private _userService: UserService) {
    
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.username = params["username"];
      this.score = params["score"];
    });

    this._userService.postUser(this.username, this.score);
    this.users = this._userService.getUsers();

    console.log(this.users);
  }

  getIntroPage(){
    this._router.navigate(['']);
  }


}
