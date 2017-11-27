import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[User] Edit';
export const RESET = '[User] Reset';

export class EditText implements Action {
  readonly type = EDIT_TEXT;

  constructor(public payload: string) {
  }
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All = Reset | EditText;
