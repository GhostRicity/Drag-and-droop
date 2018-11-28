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
    {name: 'Statement 01', type: 'dalitGril'},
    {name: 'Stetement 02', type: 'brahminGirl'},
    {name: 'Stetement 03', type: 'brahminBoy'},
    {name: 'Stetement 04', type: 'dalitBoy'},
  ];

  droppedPoorGirls = [];
  droppedRichGirls = [];
  droppedRichBoys = [];
  droppedPoorBoys = [];
  droppedItems = [];
  dragEnabled = true;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  getScorePage(){
    this._router.navigate(['score']);
  }

  onPoorGirlDrop(e: DropEvent) {
    this.droppedPoorGirls.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  onRichGirlDrop(e: DropEvent) {
    this.droppedRichGirls.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  onRichBoyDrop(e: DropEvent) {
    this.droppedRichBoys.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  onPoorBoyDrop(e: DropEvent) {
    this.droppedPoorBoys.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
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
