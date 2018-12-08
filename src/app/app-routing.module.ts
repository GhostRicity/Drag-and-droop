import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { CartoonComponent } from './cartoon/cartoon.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'', component:IntroComponent },
  { path:'cartoon', component:CartoonComponent },
  { path:'user', component:UserComponent },
  { path:'game/:username',component:GameComponent },
  { path:'score/:username/:score',component:ScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
