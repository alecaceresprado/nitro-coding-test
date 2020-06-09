# NitroTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

This project contains both a Frontend server and a Backend mock server: 

In order to run JSON server, you need to run `npm run server`.

After you have the mock BE server runing, you need to run `npm start` to start the frontend server.

The `npm start` will automatically open a new tab. You can also manually navigate to `http://localhost:4200/`.

This project has hot-reloading, so this app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests with [Jest](https://jestjs.io/). Coverage: 100%

## Requirements
 -  Load the static json list of posts attached (ideally you serve the file in a simple node.js server).
 - Display posts on a tree view, where posts are grouped by posting week.
 - Clicking on each element, the user can see all details and a form where ‘location’ and ‘author’ fields can be edited locally (in memory, no API call needed).
 - User can change the grouping type of the list. So instead of having a tree grouped by weeks, it could group it by ‘author’ or ‘location’.
 - Bonus tasks: style your solution using any of the modern CSS features you like the most.

## Judging criteria
 - Correctness – does it do what the spec requires?
 - Verification – does the submission verify that it behaves as required?
 - Readability – is it easily understandable?
 - Clarity – does it make clear what it is trying to do?
 - Simplicity – is the code relatively uncomplicated?
 - Safety – is it resource and input safe?
 - Expertise – does the code feel like it was written by an expert?
 - Craftsmanship – how maintainable is the code by others?

 ## Notes
  - This project has Redux as state management. Even though the application Idea is small enough not to use a store management. I have decided to include it to show my skills with a state management tool. 
  