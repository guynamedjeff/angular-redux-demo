import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { userReducer } from './user.reducer';

import { AppComponent } from './app.component';
import { CurrentNameAComponent } from './current-name-a/current-name-a.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { CurrentNameBComponent } from './current-name-b/current-name-b.component';
import { NameEntryComponent } from './name-entry/name-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentNameAComponent,
    UserSelectComponent,
    CurrentNameBComponent,
    NameEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
