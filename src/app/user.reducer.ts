import * as UserActions from './user.actions';
import { User } from './user.model';

export type Action = UserActions.All;

// Default app state
const defaultState: User = {
  username: 'Mr. Awesome',
  user_id: 1
};

// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

// Reducer function
export function userReducer(state: User = defaultState, action: Action) {

  switch (action.type) {
    case UserActions.EDIT_TEXT:
      return newState(state, {username: action.payload});

    case UserActions.RESET:
      return defaultState;

    default:
      return state;
  }
}
