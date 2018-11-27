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
    {name: 'Statement 07', type: 'dalitGril'},
    {name: 'Stetement 08', type: 'brahminGirl'},
    {name: 'Stetement 09', type: 'brahminBoy'},
    {name: 'Stetement 10', type: 'dalitBoy'},
    {name: 'Statement 11', type: 'dalitGril'},
    {name: 'Stetement 12', type: 'brahminGirl'},
    {name: 'Stetement 13', type: 'brahminBoy'},
    {name: 'Stetement 14', type: 'dalitBoy'},
  ];

  droppedDalitGrils = [];
  droppedBrahminGirls = [];
  droppedBrahminBoys = [];
  droppedDalitBoys = [];
  droppedItems = [];
  dragEnabled = true;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  GetScorePage(){
    this._router.navigate(['score']);
  }

  onDalitGrilDrop(e: DropEvent) {
    this.droppedDalitGrils.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  onBrahminGirlDrop(e: DropEvent) {
    this.droppedBrahminGirls.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  onBrahminBoy(e: DropEvent) {
    this.droppedBrahminBoys.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  onDalitBoy(e: DropEvent) {
    this.droppedDalitBoys.push(e.dragData);
    this.removeItem(e.dragData, this.statements);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}
