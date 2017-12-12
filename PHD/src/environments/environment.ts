// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDWmm6gvQhnlWleRYcG_fizOb6Yjni-O9g",
    authDomain: "pacienthelpdiet.firebaseapp.com",
    databaseURL: "https://pacienthelpdiet.firebaseio.com",
    projectId: "pacienthelpdiet",
    storageBucket: "pacienthelpdiet.appspot.com",
    messagingSenderId: "403891631372"
  }
};