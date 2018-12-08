import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgDragDropModule } from 'ng-drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { UserComponent } from './user/user.component';
import { CartoonComponent } from './cartoon/cartoon.component';

import { UserService } from './user.service';

var config = {
  apiKey: "AIzaSyB4D5ExFAEnyL16mb-i9pg4SIDw2_Bdvf0",
  authDomain: "nepalgame-fc512.firebaseapp.com",
  databaseURL: "https://nepalgame-fc512.firebaseio.com",
  projectId: "nepalgame-fc512",
  storageBucket: "",
  messagingSenderId: "590958084211"
};

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    ScoreComponent,
    UserComponent,
    CartoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
