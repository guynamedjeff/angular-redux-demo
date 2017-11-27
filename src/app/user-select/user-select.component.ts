import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../user.model';
import * as UserActions from '../user.actions';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {

  user: Observable<User>;
  message: string;
  names: Array<string>;

  constructor(private store: Store<AppState>) {
    this.user = this.store.select('user');
  }

  ngOnInit() {
    this.message = `This component will change the
      name referenced in Components A and B based
      on the button you select.`;

    this.names = [
      'Mr.Amazing',
      'Captain Awesome',
      'Bro',
      'Lucio',
      'Billy Bob'
    ];
  }

  editText(event) {
    const username = event.path[0].textContent;
    this.store.dispatch(new UserActions.EditText(username));
  }

}
