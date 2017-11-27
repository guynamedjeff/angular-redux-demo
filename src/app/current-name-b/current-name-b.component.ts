import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../user.model';
import * as UserActions from '../user.actions';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-current-name-b',
  templateUrl: './current-name-b.component.html',
  styleUrls: ['./current-name-b.component.scss']
})
export class CurrentNameBComponent implements OnInit {

  user: Observable<User>;
  message: string;

  constructor(private store: Store<AppState>) {
    this.user = this.store.select('user');
  }

  ngOnInit() {
    this.message = `This component is made to display changes to our given username
      via our name input above and Component C. It should be the same as Component A.`;
  }

}
