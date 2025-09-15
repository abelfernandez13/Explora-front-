import { environment } from '@env/environment';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseApp = initializeApp(environment.firebase);
export const firebaseAuth = getAuth(firebaseApp);
