import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path:'', component:IntroComponent },
  { path:'game',component:GameComponent },
  { path:'score',component:ScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
