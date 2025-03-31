// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCieE8f3E3ejDN90XLSCFWmEYDZaonrdlE",
    authDomain: "explora-843ee.firebaseapp.com",
    projectId: "explora-843ee",
    storageBucket: "explora-843ee.firebasestorage.app",
    messagingSenderId: "1022795831468",
    appId: "1:1022795831468:web:555b48f3754bd5621d6709"
  }
  // Initialize Firebase
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
