import { initializeApp } from "firebase/app";
import { Database, getDatabase } from "firebase/database";

export let database: Database;

export const configureFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };

  const app = initializeApp(firebaseConfig);
  database = getDatabase(app);
};
