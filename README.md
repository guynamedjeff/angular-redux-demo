# AngularReduxDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

# Purpose

This demo was made to experiment with Redux and specifically ngrx. The behavior at the center is async interpolation done with a pipe and property call in base components.

Data flows are not quite up-down, but rather that of sidewise via a store meant to update shifting data across live components.

# Specific Functionality

There are four main components in the demo. The first is a simple text input that submits an updated username to the data store.

Components A and B are meant to show the update of this change as well as respond to Component C.

Component C offers a series of buttons in order to change the username based on clickable input, utilizing similar functionality to that of our text input field.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
