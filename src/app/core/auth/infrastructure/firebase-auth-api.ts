import { firebaseAuth } from '../../firebase/config';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { AuthApi } from '../application/api';
import { User, AuthProvider, AuthCredentials } from '../domain/auth-types';

export class FirebaseAuthApi implements AuthApi {
  async signIn(provider: AuthProvider, credentials?: AuthCredentials): Promise<User> {
    switch (provider) {
      case 'email':
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }
        const cred = await signInWithEmailAndPassword(
          firebaseAuth,
          credentials.email,
          credentials.password
        );
        return this.mapUser(cred.user);

      case 'google':
        const googleCred = await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
        return this.mapUser(googleCred.user);

      case 'github':
        const githubCred = await signInWithPopup(firebaseAuth, new GithubAuthProvider());
        return this.mapUser(githubCred.user);

      default:
        throw new Error(`Unsupported provider: ${provider}`);
    }
  }

  async signOut(): Promise<void> {
    return signOut(firebaseAuth);
  }

  onAuthStateChanged(cb: (user: User | null) => void): void {
    onAuthStateChanged(firebaseAuth, (fbUser) => cb(fbUser ? this.mapUser(fbUser) : null));
  }

  private mapUser(fbUser: any): User {
    return {
      id: fbUser.uid,
      email: fbUser.email,
      displayName: fbUser.displayName,
      photoURL: fbUser.photoURL,
    };
  }
}
