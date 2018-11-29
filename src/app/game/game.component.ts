import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = 'angular-draganddrop';

  statements = [
    {name: 'I get low quality eduction', type1: 'poorGirl', type2: 'poorBoy'},
    {name: 'I drop out of school between 3 – 6 grade', type1: 'poorGirl'},
    {name: 'I experience violence in school and at home', type1: 'poorGirl'},
    {name: 'I live in a mudd house', type1: 'poorGirl', type2: 'poorBoy'},
    {name: 'I am discriminated by people from other casts', type1: 'poorGirl', type2: 'poorBoy'},
    {name: 'I dont eat enough healthy food everyday', type1: 'poorGirl', type2: 'poorBoy'},
    {name: 'I am not allowed to drink and smoke', type1: 'poorGirl'},
    {name: 'I run away from home and get married early', type1: 'poorGirl'},
    {name: 'I am often sick', type1: 'poorGirl'},
    {name: 'I seldomly have time for my homework', type1: 'poorGirl'},
    {name: 'I do housework everyday', type1: 'poorGirl'},
    {name: 'I seldomly have time to play', type1: 'poorGirl'},
    {name: 'There is nothing to inherit from my parents', type1: 'poorGirl'},

    {name: 'I live in a nice house', type1: 'richGirl', type2: 'richBoy'},
    {name: 'I get some respect in society', type1: 'richGirl'},
    {name: 'I experience violence from my family but not from school teachers', type1: 'richGirl'},
    {name: 'I eat enough food everyday', type1: 'richGirl'},
    {name: 'I cant decide who I am going to marry.', type1: 'richGirl'},
    {name: 'I do my homework everyday', type1: 'richGirl'},
    {name: 'I have time to play most days', type1: 'richGirl'},
    {name: 'I am not allowed to drink and smoke', type1: 'richGirl'},
    {name: 'I have to do house work everyday', type1: 'richGirl'},
    {name: 'If I get married I will not inherit land from my parents', type1: 'richGirl', type2: 'poorBoy'},

    {name: 'I get quality education', type1: 'richBoy', type2: 'richGirl'},
    {name: 'I am respected in my society', type1: 'richBoy'},
    {name: 'I eat enough food everyday', type1: 'richBoy'},
    {name: 'I cant decide who I am going to marry', type1: 'richBoy'},
    {name: 'I dont experience violence from teachers or family members', type1: 'richBoy'},
    {name: 'I do my homework everyday', type1: 'richBoy'},
    {name: 'I have time to play everyday', type1: 'richBoy'},
    {name: 'I dont have to do house work', type1: 'richBoy'},
    {name: 'My family have their own house and some land', type1: 'richBoy'},
    {name: 'My family have cows', type1: 'richBoy'},
    {name: 'I will inherit my parents land one day', type1: 'richBoy'},

    {name: 'I drop out of school between grade 6-10', type1: 'poorBoy'},
    {name: 'I experience violence from school teachers but not from my family', type1: 'poorBoy'},
    {name: 'I am alowed to drink and smoke', type1: 'poorBoy', type2: 'richBoy'},
    {name: 'I can decide who I want to marry.', type1: 'poorBoy', type2: 'richBoy'},
    {name: 'I do my homework some days', type1: 'poorBoy'},
    {name: 'I only do housework occassionally', type1: 'poorBoy'},
    {name: 'I have time to play most days', type1: 'poorBoy'},

  ];

  droppedPoorGirls = [];
  droppedRichGirls = [];
  droppedRichBoys = [];
  droppedPoorBoys = [];
  droppedItems = [];
  dragEnabled = true;
  score = 0;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  getScorePage(){
    this._router.navigate(['score']);
  }

  onPoorGirlDrop(e: DropEvent) {
    this.droppedPoorGirls.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
    if ( e.dragData.type1 == "poorGirl" || e.dragData.type2 == "poorGirl") {
      this.score += 100;
    } else {
      this.score -= 100;
    }
    console.log(this.score);
  }

  onRichGirlDrop(e: DropEvent) {
    this.droppedRichGirls.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
    if ( e.dragData.type1 == "richGirl" || e.dragData.type2 == "richGirl") {
      this.score += 100;
    } else {
      this.score -= 100;
    }
    console.log(this.score);
  }

  onRichBoyDrop(e: DropEvent) {
    this.droppedRichBoys.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
    if ( e.dragData.type1 == "richBoy" || e.dragData.type2 == "richBoy") {
      this.score += 100;
    } else {
      this.score -= 100;
    }
    console.log(this.score);
  }

  onPoorBoyDrop(e: DropEvent) {
    this.droppedPoorBoys.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
    if ( e.dragData.type1 == "poorBoy" || e.dragData.type2 == "poorBoy") {
      this.score += 100;
    } else {
      this.score -= 100;
    }
    console.log(this.score);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
    if (list.length == 0) {
      this.getScorePage();
    }
  }

}
