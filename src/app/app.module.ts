import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgDragDropModule } from 'ng-drag-drop';

import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
