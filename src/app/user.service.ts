import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCol: AngularFirestoreCollection<User>;
  users: any;

  constructor(private afs: AngularFirestore) { }

  postUser(username, score){
    this.afs.collection('users').add({
      username: username,
      score: score
    });    
  }

  getUsers(){
    this.usersCol = this.afs.collection<User>('users', ref => ref.orderBy('score', 'desc').limit(10));
    // this.usersCol = this.afs.collection('users');
    // //this.users = this.usersCol.valueChanges();
    this.users = this.usersCol.snapshotChanges().pipe(
      map(actions => {
          return actions.map( a => {
              const data = a.payload.doc.data() as User;
              const id = a.payload.doc.id;
              return { id, data};
          });
      })
    );
    this.afs.collection<User>('users', ref => ref.orderBy('score'));
    return this.users;
  }

}
