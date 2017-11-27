import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../user.model';
import * as UserActions from '../user.actions';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-current-name-a',
  templateUrl: './current-name-a.component.html',
  styleUrls: ['./current-name-a.component.scss']
})
export class CurrentNameAComponent implements OnInit {

  user: Observable<User>;
  message: string;

  constructor(private store: Store<AppState>) {
    this.user = this.store.select('user');
  }

  ngOnInit() {
    this.message = `This component is made to display changes to our given username
      via our name input above and Component C. It should be the same as Component B.`;
  }
}
