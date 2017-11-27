import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../user.model';
import * as UserActions from '../user.actions';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-name-entry',
  templateUrl: './name-entry.component.html',
  styleUrls: ['./name-entry.component.scss']
})
export class NameEntryComponent {

  user: Observable<User>;
  username: string;

  constructor(private store: Store<AppState>) {
    this.user = this.store.select('user');
  }

  editText() {
    this.store.dispatch(new UserActions.EditText(this.username));
  }

  resetName() {
    this.store.dispatch(new UserActions.Reset());
  }
}
